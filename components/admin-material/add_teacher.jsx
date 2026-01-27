import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Avatar,
} from "@mui/material";
import "../../css/addteacher.css";

function AddTeacherForm() {
  const[error, seterror] =useState("");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    dob: "",
    mobile: "",
    qualification: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://backend.gonakli.com/admin/add-teacher", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: "include",
    }).then((res)=>{
      if(res.status === 200){
        alert('teacher added successfully');
        setFormData({
    name: "",
    address: "",
    email: "",
    dob: "",
    mobile: "",
    qualification: "",
    profilePic: null,
  });

      }else{
 seterror("unable to save teacher details..... try again");
      }
    })
    
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Paper elevation={6} style={{ padding: "30px", borderRadius: "12px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          ➕ Add Teacher
        </Typography>
        {error &&  <Typography variant="h4" align="center" gutterBottom> {error} </Typography>}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                label="Date of Birth"
                name="dob"
                InputLabelProps={{ shrink: true }}
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="tel"
                label="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleChange}
              />
              {formData.profilePic && (
                <Avatar
                  src={URL.createObjectURL(formData.profilePic)}
                  alt="Profile Preview"
                  sx={{ width: 80, height: 80, margin: "10px auto" }}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ padding: "12px", fontSize: "16px" }}
              >
                Add Teacher
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default AddTeacherForm;
