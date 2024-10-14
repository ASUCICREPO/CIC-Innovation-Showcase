import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import PlayDemoButton from "./PlayDemoButton";
import VideoModal from "./VideoModal";

const ProjectCard = ({projectName, projectInfo, demo}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      boxShadow={3}
      borderRadius={"15px"}
      width={"450px"}
      sx={{ backgroundColor: "rgb(107, 78, 121, 0.9)" }}
      p={3}
    >
      <Typography variant="h4" color={"white"} fontWeight={"bold"}>
       {projectName}
      </Typography>
      <Typography variant="body2" color={"white"} mt={2}>
        {projectInfo}
      </Typography>
      <PlayDemoButton onClick={handleOpen} />
      <VideoModal open={open} handleClose={handleClose} demo={demo}/>
    </Box>
  );
};

export default ProjectCard;
