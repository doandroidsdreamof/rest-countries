import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginate = ({ handleChange }) => {
  
  return (
    <>
      <Stack spacing={2}>
        <Pagination id='paginate' onChange={handleChange} count={12} variant="outlined" color="primary" shape="rounded" className="text-white  hide-on-search" />
      </Stack>
    </>
  );
};

export default Paginate;
