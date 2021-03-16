import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

let base64 = require('base-64');
let headers = new Headers();

export const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  let history = useHistory();

  const onChangeUsername = username => setUsername(username);
  const onChangePassword = password => setPassword(password);
  const onClickLogin = () => {
    headers.set("Authorization", `Basic ${base64.encode}(${userName}:${password})`);
    fetch('https://localhost:5000/login', {headers, method: 'POST'})
      .then(res => {
        if(res.status === 200) return res.json();
        else return null;
      })
      .then(json => {
        if(json) history.push("/books");
        else setLoginError('username or password is incorrect');
      })
      .catch(err => console.log(`Error logging into app , ${err.message}`));
  }
  return(
    <Grid container direction={"column"} alignItems={"center"} style={{marginTop: "10vh"}} >
      <Grid item style={{marginBottom: "10vh"}}>
        <Typography variant={"h3"}>welcome to Bookie!
          <span role={"img"} aria-label={"books"}>
            📚
          </span>
        </Typography>
      </Grid>
      <Grid item style={{marginBottom: "5vh"}}>
        <TextField
          id={"username-input"}
          label={"username"}
          value={userName}
          onChange = {e => onChangeUsername(e.target.value)}
        />
      </Grid>
      <Grid item style={{marginBottom: "7vh"}}>
        <TextField
          id={"password-input"}
          label={"password"}
          type={'password'}
          value={password}
          onChange = {e => onChangePassword(e.target.value)}
        />
      </Grid>
      <Grid item style={{marginBottom: "7vh"}}>
        <Button
         aria-label={"login"}
         variant={"contained"}
         size={"large"}
         color={"primary"}
         onClick={onClickLogin} 
        >
          Login
        </Button>
      </Grid>
      <Grid item>
        <Typography variant={"body2"} color={"error"}>
          {loginError}
        </Typography>
      </Grid>
    </Grid>
  )
}
/*
const url = "http://localhost:5000/login";

export const Login = () => {

  return (

  );
}; */
