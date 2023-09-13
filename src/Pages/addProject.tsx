import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AddProject() {
    const baseApi = "https://jsonplaceholder.typicode.com/comments"
    const [model, setModel] = useState<any>({});
    const params = useParams();

    const getPostById = () => {
        axios.get(`${baseApi}/${params.id}`)
        .then((res)=>{
            setModel({...res.data})
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    const updatePost = () => {
        axios.put(`${baseApi}/${params.id}`).then((res)=>{
            console.log("Post Updated Successfully ==>", res.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    const submitData = () => {
        model.postId = 101;
        axios.post(baseApi, model).then((res) => {
            console.log("Posted Successfully ==>", res.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    useEffect(()=>{
        if(params.id){
            getPostById();
        }
    }, [])

    return (
        <>
            <Box className="p-2 m-2 text-center">
                <h1>Add Projects</h1>
                <div>
                    <input
                    value={model.name}
                    onChange={(e) => setModel({ ...model, name: e.target.value })}
                    placeholder="Name" type="text" />
                </div>
                <div className="mt-2">
                    <textarea
                    value={model.body}
                    onChange={(e) => setModel({ ...model, body: e.target.value })}
                    placeholder="Body"></textarea>
                </div>
                <div>
                    {params.id ? (
                        <Button onClick={updatePost} variant="contained">Update</Button>
                    ):
                    (
                    <Button onClick={submitData} variant="contained">Submit</Button>
                    ) }
                </div>
            </Box>
        </>
    )
}