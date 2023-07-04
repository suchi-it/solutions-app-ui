
import { Dashboard } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  HONEY_PACKAGE_SIZES,
  PACKAGE_SIZES,
  TUMERIC_PRODUCT_TYPE,
} from "src/utils/constants";

NewOrderFormTumeric.propTypes = {
  onSubmit: PropTypes.func,
  buttonLabel: PropTypes.string,
  orderData: PropTypes.any,
};

export default function NewOrderFormTumeric({
  buttonLabel = "Create",
  onSubmit,
  orderData,
}) {
  const [ClientName, setClientName] = useState(null);
  const [ContactNumber, setcontactnumber] = useState("");
 const [EmailId, setEmailId] = useState("");
  const [Industry, setIndustry] = useState("");
  const [DemoStatus, setDemoStatus] = useState("");
  const [Interested, setInterested] = useState("");
  const [Status, setStatus] = useState("null");
const [DueDate, setDueDate] = useState("null");
const [CommentList, setCommentList] = useState("");

  const loggedUserDetails = JSON.parse(localStorage.user);


  const handleClientNameChange = (e) => {
    setClientName(e.target.value);
  };
  const handleContactNumberChange = (e) => {
    setcontactnumber(e.target.value);
  };

const handleEmailIdChange = (e) => {
setEmailId(e.target.value);
};
  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
  };
  const handleDemoStatusChange = (e) => {
    setDemoStatus(e.target.value);
    
  };
  const handleInterestedChange = (e) => {
    setInterested(e.target.value);
    
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };
  const handleCommentListChange = (e) => {
    setCommentList(e.target.value);
  };

    
  const handleSubmit = () => {

    const payload = {
      Dashboard:Dashboard

    };
    

    console.log(payload);

  };

  return (
    <>
      <Stack
        direction="row"
        display={"grid"}
        gridTemplateColumns={"repeat(2, 1fr)"}
        gap={3}
        sx={{ my: 3 }}
      >
       
        <TextField
          name="ClientName"
          type={"text"}
          label="Client Name"
          value={ClientName}
          onChange={handleClientNameChange}
        />
        <TextField
          name="ContactNumber"
          type={"text"}
          label="Contact Number"
          value={ContactNumber}
          onChange={handleContactNumberChange}
        />
         <TextField
          name="EmailId"
          type={"text"}
          label="EmailId"
          value={EmailId}
          onChange={handleEmailIdChange}
        />
        <TextField
          name="Industry"
          type={"text"}
          label="Industry"
          value={Industry}
          onChange={handleIndustryChange}
        />
        <TextField
          name="DemoStatus"
          type={"text"}
          label="DemoStatus"
          value={DemoStatus}
          onChange={handleDemoStatusChange}
        />
           <TextField
          name="Interested"
          type={"number"}
          label="Interested"
          value={Interested}
          onChange={handleInterestedChange}
        />
        
        <TextField
          name="Status"
          type="date"
          label="Status"
          value={Status}
          onChange={handleStatusChange}
        />


        <TextField
          name="DueDate"
          type="date"
          label="DueDate"
          value={DueDate}
          onChange={handleDueDateChange}
        /> 
        <TextField
        name="CommentList"
        type="Text"
        label="CommentList"
        value={CommentList}
        onChange={handleCommentListChange}
        /> 

      </Stack>

      <LoadingButton
        // fullWidth
        // maxWidth="md"
        size="large"
        type="submit"
        variant="contained"
        // sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        {`${buttonLabel} Request`}
      </LoadingButton>
    </>
  );
}
