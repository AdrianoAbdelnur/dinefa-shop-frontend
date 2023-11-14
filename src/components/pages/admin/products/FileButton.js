import { useRef } from "react";
import { Button } from "react-bootstrap"

export default function FileButton({setFile}) {
    const hiddenFileInput = useRef(null);
    const handleClick = (e) => {
        hiddenFileInput.current.click()
    }

    const handleChange = async(e) => {
        const fileUploaded = e.target.files[0]
        beforeUpload(fileUploaded);
        const base64 = await getBase64(fileUploaded);
        setFile(base64)
    }

    const getBase64 = (img) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener("load", () => resolve(reader.result));
            reader.readAsDataURL(img)
        })
    }

    const beforeUpload = (file) => {
        const isJpegOrPng = file.type === "image/jpeg" || file.type === "image/png"
        if (!isJpegOrPng) {
            alert("Solamente se permiten archivos jpeg o png")
            return;
        }
    }

    const onInputClick = (e)=> {
        e.target.value = "";
    }

    return (
        <>
            <Button variant="dark" onClick={handleClick}>
                Seleccionar Imagen del Producto
            </Button>
            <input 
            type="file"
            ref={hiddenFileInput}
            style={{display: "none"}}
            onChange={handleChange}
            onClick={onInputClick}
            ></input>
        </>
    )
}