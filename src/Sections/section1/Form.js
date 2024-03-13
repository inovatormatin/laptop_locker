import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, IconButton, Snackbar, Stack, TextField } from "@mui/material";
import { PaperPlaneRight, X } from "phosphor-react";

const Form = ({ open, setOpen, screenWidth }) => {
  const [popup, setPopup] = useState(false);
  const [msg, setMsg] = useState("");
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    problem: "",
  });
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    problemError: "",
  });
  const resetError = () => {
    setErrors({
      nameError: "",
      emailError: "",
      phoneError: "",
      problemError: "",
    });
  };

  const handleClose = () => {
    setOpen(false);
    resetError();
    setMessage({
      name: "",
      email: "",
      phone: "",
      problem: "",
    });
  };

  const handleValidation = () => {
    let isValid = true;

    // Name validation
    if (!message.name || message.name.length > 15) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameError: "Name should not be empty and less than 15 characters",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameError: "",
      }));
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(message.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: "Enter a valid email address",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: "",
      }));
    }

    // Phone validation
    if (!/^\d{10}$/.test(message.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneError: "Phone number should contain 10 digits",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneError: "",
      }));
    }

    // Problem validation
    if (!message.problem || message.problem.length < 15) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        problemError: "Problem should contain at least 15 characters",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        problemError: "",
      }));
    }

    return isValid;
  };

  const inputHandler = (event) => {
    let obj = {
      ...message,
      [event.target.name]: event.target.value,
    };
    setMessage(obj);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    borderRadius: 2,
    width: screenWidth > 600 ? 500 : "70%",
  };

  const handlePopClick = () => {
    setPopup(true);
  };

  const handlePopClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPopup(false);
  };

  const sendMessageToDiscord = () => {
    if (handleValidation()) {
      const webhookUrl = process.env.REACT_APP_DISCORD_WEBHOOK_URL;

      // Create the formatted message with line breaks
      const formattedMessage = `
    name: ${message.name},
    email: ${message.email},
    phone: ${message.phone},
    problem: ${message.problem}
  `;
      setMsg("Sending wait... ");
      handlePopClick();

      const payload = {
        content: formattedMessage,
      };
      fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            setMsg("Failed to send message");
            handlePopClick();
            handleClose();
            throw new Error("Failed to send message");
          } else {
            setMsg("Sent! We will call you soon.");
            handlePopClick();
            handleClose();
          }
        })
        .catch((error) => {
          setMsg("Failed to send message");
          handlePopClick();
          handleClose();
          console.error("Error sending message:", error);
        });
    } else {
      setMsg("Fill the form properly.");
      handlePopClick();
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            fontWeight={600}
          >
            Get A Callback!
          </Typography>
          <Typography
            variant="subtitle1"
            id="modal-modal-description"
            sx={{ mt: 1 }}
          >
            Schedule an appointment. Within an hour, an expert will be at your
            door step.
          </Typography>
          {/* Form submission */}
          <Stack spacing={1.5} my={1.5}>
            <Stack direction="row" spacing={1.5}>
              {/* Name */}
              <TextField
                required
                id="standard-required"
                label="Your name"
                defaultValue=""
                variant="standard"
                fullWidth
                name="name"
                value={message.name}
                onChange={(e) => inputHandler(e)}
                error={errors.nameError !== ""}
                helperText={errors.nameError !== "" ? errors.nameError : ""}
              />
              {/* Phone */}
              <TextField
                required
                id="standard-required"
                label="Phone"
                defaultValue=""
                variant="standard"
                fullWidth
                name="phone"
                value={message.phone}
                onChange={(e) => inputHandler(e)}
                error={errors.phoneError !== ""}
                helperText={errors.phoneError !== "" ? errors.phoneError : ""}
              />
            </Stack>
            {/* Email */}
            <TextField
              required
              id="standard-required"
              label="Email"
              defaultValue=""
              variant="standard"
              fullWidth
              name="email"
              value={message.email}
              onChange={(e) => inputHandler(e)}
              error={errors.emailError !== ""}
              helperText={errors.emailError !== "" ? errors.emailError : ""}
            />
            {/* Problem */}
            <TextField
              required
              id="standard-required"
              label="Problem"
              defaultValue=""
              variant="standard"
              fullWidth
              multiline
              rows={4}
              name="problem"
              value={message.problem}
              onChange={(e) => inputHandler(e)}
              error={errors.problemError !== ""}
              helperText={errors.problemError !== "" ? errors.problemError : ""}
            />
          </Stack>

          {/* Button Actions */}
          <Stack
            direction="row"
            justifyContent={screenWidth > 600 ? "end" : "center"}
            alignItems="center"
            spacing={1}
            my={3}
          >
            <Button
              variant="outlined"
              color="error"
              startIcon={<X size={20} />}
              size="small"
              onClick={handleClose}
              sx={{
                borderRadius: "20px",
                p: "8px 15px",
              }}
            >
              Cancle
            </Button>
            <Button
              variant="contained"
              color="info"
              startIcon={<PaperPlaneRight size={20} />}
              size="small"
              sx={{
                borderRadius: "20px",
                p: "8px 15px",
              }}
              onClick={() => {
                sendMessageToDiscord();
              }}
            >
              Submit
            </Button>
          </Stack>
          {/* Divider */}
          <Divider sx={{ my: 2 }} />
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%" }}
            spacing={0.5}
          >
            <Typography variant="h6" fontWeight={600} fontSize={"1.2rem"}>
              Or call us now !
            </Typography>
            <Typography variant="body1" fontWeight={600} fontSize={"1rem"}>
              <a href="tel:+918586885226">+91 85868 85226</a>
            </Typography>
          </Stack>
        </Box>
      </Modal>
      <Snackbar
        open={popup}
        autoHideDuration={4000}
        onClose={handlePopClose}
        message={msg}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handlePopClose}
          >
            <X size={18} />
          </IconButton>
        }
      />
    </div>
  );
};

export default Form;
