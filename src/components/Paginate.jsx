import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginate = ({ handleChange }) => {
  return (
    <>
      <Stack spacing={2}>
        <Pagination onChange={handleChange} count={12} variant="outlined" color="secondary" shape="rounded" className="text-white" />
      </Stack>
    </>
  );
};

export default Paginate;
