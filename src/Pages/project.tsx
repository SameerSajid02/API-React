import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Projects(){
    const [listData, setListData] = useState<any>([]);

    const navigate = useNavigate();

    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
            setListData([...res.data])
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    const deletePost = (id: number)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(()=>{
         console.log("Post Deleted Successfully!")
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    useEffect(()=>{
        getData();
    }, [])

    return(
        <>
        <div>
            <div className="text-center mt-3 mb-3">
            <h1>Projects</h1>
            <Button onClick={()=>{navigate("/add")}} variant="contained">Add</Button>
            </div>
            {listData.map((x:any, i:any)=>(
                <Box className="m-2 p-2 border border-dark rounded">
                    <Typography><span className="fs-5 text-success">Name: </span>{x.name}</Typography>
                    <Typography><span className="fs-5 text-success">Email: </span>{x.email}</Typography>
                    <Typography><span className="fs-5 text-success">Body: </span>{x.body}</Typography>
                    <IconButton onClick={()=>{
                        navigate(`/add/${x.id}`)
                    }}
                     color="info"><EditIcon/></IconButton>
                    <IconButton onClick={()=>{deletePost(x.id)}} color="error"><DeleteIcon/></IconButton>
                </Box>
            ))}
        </div>
        </>
    )
}