import {useState} from 'react';
import { Dialog, Box, styled, Typography, InputBase, TextField, Button } from '@mui/material';
import { Close,DeleteOutline } from '@mui/icons-material';

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: 'none',
    borderRadius:'10px 10px 0 0'
}
const Header = styled(Box)({
    display: 'flex',
    marginTop: '10px',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '&>p': {
        fontWeight: 500,
        fontSize:14
        
    }
    

})


const RecipientsWrapper = styled(Box)
    ({
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 15px',
        '&>div': {
            fontSize: '14px',
            borderBottom: "1px solid #F5F5F5",
            marginTop: '10px',

            

        }


    })
const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',  
    padding: '10px 15px',
       
})

const SendButton = styled(Button)({
    background: "#0B57D0",
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: '18px',
    width: '100px',
    


})
const ComposeMail = ({openDialog,setOpenDialog}) =>
{
    const [data, setData] = useState({});
    const config = {
        Host : "smtp.elasticemail.com",
        Username : process.env.REACT_APP_USERNAME,
        Password: process.env.REACT_APP_PASSWORD,
        Port:"2525"
      
    }


    const closeComposeMail = (e) =>
    {
        e.preventDefault();
        setOpenDialog(false);
    }
    
    const onValueChange = (e) =>
    {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
        }
    const SendMail = (e) =>
    {
        e.preventDefault();
        if (window.Email)
        {

        
            window.Email.send({
                ...config,
                To: data.to,
                From: "lalit.kashyap.ug20@nsut.ac.in",
                Subject: data.subject,
                Body: data.body
            }).then(
                message => alert(message)
            );
        }
    
        setOpenDialog(false);
    }



   
    return (
        <Dialog
            open={openDialog}
        PaperProps={{sx:dialogStyle}}>
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize='small' onClick={ (e)=>closeComposeMail(e)} />
            </Header>

            <RecipientsWrapper>
                <InputBase placeholder="Recipients" name="to" onChange={(e) =>
                {
                    onValueChange(e); 
                }} />
                <InputBase placeholder="Subject"name="subject" onChange={(e) =>
                {
                    onValueChange(e); 
                }}  />
            </RecipientsWrapper>

            <TextField
                multiline
                rows={(20)}
                sx={{ '& MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                onChange={(e) =>
                    {
                        onValueChange(e); 
                }} 
                name="body"
            />
            <Footer>
                <SendButton onClick={(e)=>SendMail(e)}>Send</SendButton> 
                <DeleteOutline OnClick={()=>setOpenDialog(false)} />  
            </Footer>


       </Dialog>
    )
}

export default ComposeMail;
