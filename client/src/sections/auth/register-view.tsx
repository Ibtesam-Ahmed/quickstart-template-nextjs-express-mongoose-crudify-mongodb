import { useState, useCallback } from "react";
import axios from "axios";
import {
  Box,
  Link,
  Button,
  Divider,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";

import { useRouter } from "../../../src/routes/hooks";
import { Iconify } from "../../../src/components/iconify";

export function RegisterView() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = useCallback(async () => {
    try {
      // Call backend /register endpoint
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert(res.data.message || "Registration successful. Please sign in.");
      router.push("/"); // Redirect to login page
    } catch (err) {
      console.error(
        "Registration failed:",
        err.response?.data?.message || err.message
      );
      alert(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    }
  }, [name, email, password, router]);

  return (
    <>
      <Box
        sx={{
          gap: 1.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Typography variant="h5">Register</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Already have an account?
          <Link href="/" variant="subtitle2" sx={{ ml: 0.5 }}>
            Sign in
          </Link>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          fullWidth
          name="name"
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          name="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          name="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          sx={{ mb: 3 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <Iconify
                    icon={
                      showPassword ? "solar:eye-bold" : "solar:eye-closed-bold"
                    }
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          size="large"
          type="submit"
          color="inherit"
          variant="contained"
          onClick={handleRegister}
        >
          Register
        </Button>
      </Box>

      <Divider
        sx={{ my: 3, "&::before, &::after": { borderTopStyle: "dashed" } }}
      >
        <Typography
          variant="overline"
          sx={{ color: "text.secondary", fontWeight: "fontWeightMedium" }}
        >
          OR
        </Typography>
      </Divider>

      <Box sx={{ gap: 1, display: "flex", justifyContent: "center" }}>
        <IconButton color="inherit">
          <Iconify width={22} icon="socials:google" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify width={22} icon="socials:github" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify width={22} icon="socials:twitter" />
        </IconButton>
      </Box>
    </>
  );
}
