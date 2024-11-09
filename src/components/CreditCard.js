import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import styles from "./styles.css";
import { Box, TextField } from "@mui/material";
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const CreditCard = () => {
    const [number, SetNumber] = useState("");
    const [name, SetName] = useState("");
    const [date, SetDate] = useState("");
    const [cvc, SetCvc] = useState("");
    const [focus, SetFocus] = useState("");

    return (
    <Box style={{ marginTop: 150,}}>
        <Card
            variant="outlined"
            sx={{
                maxHeight: 'max-content',
                maxWidth: 600,
                mx: 'auto',
                // to make the demo resizable
                overflow: 'auto',
                resize: 'horizontal',
                bgcolor: "#e8ebe9"
            }}
        >
        <div clasName="rccs__card rccs__card--unknown">
            <Cards
                number={number}
                name={name}
                expiry={date}
                cvc={cvc}
                focused={focus}
            />
        </div>
        <Typography level="title-lg" startDecorator={<InfoOutlined />}>
            Add new card
        </Typography>
        <Divider inset="none" />
        <CardContent
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                gap: 1.5,
            }}
        >
        <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>Card number</FormLabel>
            <Input
                type="number"
                // label="Card Number"
                // className="form-control"
                // labe
                value={number}
                name="number"
                onChange={(e) => {
                    SetNumber(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
                endDecorator={<CreditCardIcon />}
            />
        </FormControl>
        <FormControl>
            <FormLabel>Card holder name</FormLabel>
                <Input
                    type="text"
                    // label="Card Name"
                    // className="form-control"
                    value={name}
                    name="name"
                    onChange={(e) => {
                        SetName(e.target.value);
                    }}
                    onFocus={(e) => SetFocus(e.target.name)}
                    endDecorator={<CreditCardIcon />}
                />
        </FormControl>
        <FormControl>
            <FormLabel>Expiry date</FormLabel>
            <TextField
                type="text"
                name="expiry"
                // label="Expiration Date"
                // className="form-control"
                value={date}
                onChange={(e) => {
                    SetDate(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
            />
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>CVC/CVV</FormLabel>
            <Input
                type="tel"
                name="cvc"
                // label="CVC"
                // className="card"
                value={cvc}
                onChange={(e) => {
                    SetCvc(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
                endDecorator={<InfoOutlined />}
            />
        </FormControl>
        <Checkbox label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
        <CardActions sx={{ gridColumn: '1/-1' }}>
            <Button variant="solid" color="primary">
                Add card
            </Button>
        </CardActions>
        </CardContent>
    </Card>
    {/* <form>
            <TextField
                type="text"
                label="Card Number"
                className="form-control"
                labe
                value={number}
                name="number"
                onChange={(e) => {
                    SetNumber(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
            />
        <br />
        <br />
                <TextField
                    type="text"
                    label="Card Name"
                    className="form-control"
                    value={name}
                    name="name"
                    onChange={(e) => {
                        SetName(e.target.value);
                    }}
                    onFocus={(e) => SetFocus(e.target.name)}
                />
        <br />
        <br />
                <TextField
                    type="text"
                    label="Expiration Date"
                    name="expiry"
                    className="form-control"
                    value={date}
                    onChange={(e) => {
                        SetDate(e.target.value);
                    }}
                    onFocus={(e) => SetFocus(e.target.name)}
                />
            <br />
            <br />
                <TextField
                    type="tel"
                    name="cvc"
                    label="CVC"
                    className="card"
                    value={cvc}
                    onChange={(e) => {
                        SetCvc(e.target.value);
                    }}
                    onFocus={(e) => SetFocus(e.target.name)}
                />
        <br />

    </form> */}
    </Box>
);
};
export default CreditCard;
