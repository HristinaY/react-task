import React, { useState } from "react";
import MyAlert from "./MyAlert";
import { Stack, Typography } from "@mui/material";
import Trigger from "./Trigger";

const alerts = {
    warning: {
        type: "warning",
        title: "Warning",
        content: "This is a warning message",
    },
    info: {
        type: "info",
        title: "Information",
        content: "This is a information message",
    },
    error: {
        type: "error",
        title: "Error",
        content: "This is a error message",
    },
};

function App() {
    const [activeAlert, setActiveAlert] = useState("info");
    const onChange = (value) => setActiveAlert(value);

    return (
        <>
            <Stack sx={{ width: "600px", padding: "20px" }} spacing={2}>
                <Typography variant={"h4"}>Alerts</Typography>
                <MyAlert
                    type={alerts[activeAlert].type}
                    title={alerts[activeAlert].title}
                    content={alerts[activeAlert].content}
                />
                <Trigger alertTypes={Object.keys(alerts)} onChange={onChange} />
            </Stack>
        </>
    );
}

export default App;
