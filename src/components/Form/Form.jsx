import { Box, TextField, Button, Modal } from "@mui/material";
import { validationSchema } from "../../schema/validations.js";
import { Formik, ErrorMessage } from "formik";


const Form = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        surName: "",
        email: "",
        region: "",
        city: "",
        street: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
         handleClose()
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "400px",
          }}
          noValidate
          autoComplete="off"
        >
          <h2>Առաքման տվյալներ</h2>
          <TextField
            id="outlined-controlled"
            value={values.name}
            name="name"
            onChange={handleChange}
            label="Անուն"
            variant="standard"
            focused
          />
          <ErrorMessage name="name">{(msg) => <p>{msg}</p>}</ErrorMessage>

          <TextField
            id="outlined-controlled"
            name="surName"
            value={values.surName}
            onChange={handleChange}
            label="Ազգանուն"
            variant="standard"
          />
          <ErrorMessage name="surName">{(msg) => <p>{msg}</p>}</ErrorMessage>
          <TextField
            id="outlined-controlled"
            name="email"
            value={values.email}
            onChange={handleChange}
            label="Էլ․ հասցե"
            variant="standard"
            type="email"
            helperText="Write valid email"
          />
          <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>
          <TextField
            id="outlined-controlled"
            name="region"
            value={values.region}
            onChange={handleChange}
            label="Մարզ"
            variant="standard"
          />
          <ErrorMessage name="region">{(msg) => <p>{msg}</p>}</ErrorMessage>
          <TextField
            id="outlined-controlled"
            name="city"
            value={values.city}
            onChange={handleChange}
            label="Քաղաք"
            variant="standard"
          />
          <ErrorMessage name="city">{(msg) => <p>{msg}</p>}</ErrorMessage>
          <TextField
            id="outlined-controlled"
            name="street"
            value={values.street}
            onChange={handleChange}
            label="Փողոց, տուն"
            variant="standard"
          />
          <ErrorMessage name="street">{(msg) => <p>{msg}</p>}</ErrorMessage>
          <Button variant="contained" color="success" type="submit">
            ՀԱՍՏԱՏԵԼ
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default Form
