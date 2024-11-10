import { Box, Button, Stack, TextField } from "@mui/material"
import {
    Alert,
    // Button,
    Form,
    Input,
    Popconfirm,
    Select,
    // Select,
    // Upload,
} from 'antd';
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {  InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

const { Option } = Select;

export const FistStep = ({ data, setData, nextStep }) => {
    return (
        <Box marginTop={27}>
            <Form
                labelCol={{span: 15}}
                wrapperCol={{span: 14,}}
                layout="horizontal"
                style={{
                    maxWidth: 800, 
                    marginLeft: 100, 
                    marginTop: 50, 
                    // textAlign:"center"
                }}
                // onClick={handleSubmit}
            >
                
                <Form.Item label="Company's name">
                    {/* <Autocomplete> */}
                    <Input 
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        value={data.name} 
                    />
                    {/* </Autocomplete> */}
                </Form.Item>
                <Form.Item label="Full name of the person in charge">
                    <Input onChange={(e) => setData({ ...data, username: e.target.value })} 
                    value={data.username}
                    />
                </Form.Item>
                <Form.Item label="Industry">
                    <Input
                        onChange={(e) => setData({ ...data, industry: e.target.value })}
                        value={data.industry}
                    />
                </Form.Item>
                <Form.Item label="Number of employees">
                    <Input
                        onChange={(e) => setData({ ...data, employee: e.target.value })}
                        value={data.employee} 
                        />
                </Form.Item>
                <Form.Item label="Company Description">
                    <Input 
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                        value={data.description} 
                    />
                </Form.Item>
                <Button onClick={nextStep}>Next</Button>
            </Form>
        </Box>
    );
}
export const SecondStep = ({ data, setData, prevStep, nextStep }) => {
    return (
        <Box marginTop={27}>
            <Form
                labelCol={{span: 15}}
                wrapperCol={{span: 14,}}
                layout="horizontal"
                style={{
                    maxWidth: 800, 
                    marginLeft: 100, 
                    marginTop: 50, 
                    // textAlign:"center"
                }}
                // onClick={handleSubmit}
            >
                <Form.Item label="Main services or products">
                    <Input
                        onChange={(e) => setData({ ...data, product: e.target.value })}
                        value={data.product}
                    />
                </Form.Item>
                <Form.Item label="Visibility objectives">
                    <Input
                        onChange={(e) => setData({ ...data, objectives: e.target.value })}
                        value={data.objectives}
                    />
                </Form.Item>
                <Form.Item label="Additional message or special needs">
                    <Input
                        onChange={(e) => setData({ ...data, message: e.target.value })}
                        value={data.message}
                    />
                </Form.Item>
                <Form.Item label="Certification" tooltip="Votre diplome" >  
                    <Input
                        onChange={(e) => setData({ ...data, certi: e.target.value })}
                        value={data.certi}
                    />
                </Form.Item>
                {/* <Form.Item label="Year of establishment of the company" >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['YearCalendar']}>
                                <YearCalendar 
                                    onChange={(e) => setData({ ...data, year: e.target.value })}
                                    value={data.year}
                                />
                        </DemoContainer>
                    </LocalizationProvider>
                </Form.Item> */}
                <Button onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next</Button>
            </Form>
        </Box>
    );
}
export const LastStep = ({ data, setData, prevStep, submitForm}) => {
    // const {
    //     ready,
    //     value,
    //     setValue,
    //     suggestions: { status, datas },
    //     clearSuggestions,
    // } = usePlacesAutocomplete();
    
    // const handleSelect = async (address) => {
    //     setValue(address, false);
    //     clearSuggestions();
    
    //     const results = await getGeocode({ address });
    //     const { lat, lng } = await getLatLng(results[0]);
    //     setSelected({ lat, lng });
    // };
    return (
        <Box marginTop={27}>
        {/* <Stack>{showMessage}</Stack> */}
            <Form
                labelCol={{span: 15}}
                wrapperCol={{span: 14,}}
                layout="horizontal"
                style={{
                    maxWidth: 800, 
                    marginLeft: 100, 
                    marginTop: 50, 
                    // textAlign:"center"
                }}
                // onClick={handleSubmit}
            >
                <Form.Item label="Email address">
                    <Input
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        value={data.email}
                    />
                </Form.Item>
                <Form.Item label="Business address">
                    <Input
                        onChange={(e) => setData({ ...data, address: e.target.value })}
                        value={data.address}
                    />
                </Form.Item>
                <Form.Item label="Map">
                
                    <Input
                        // prefix={<HeatMapOutlined />}
                        onChange={(e) => setData({ ...data, mapp: e.target.value })}
                        value={data.mapp}
                        placeholder="Add Embedding"
                    />
                </Form.Item>
                <Form.Item label="Company phone number">
                    <PhoneInput 
                        country={"af"}
                        onChange={(e) => setData({ ...data, phone: e })}
                        value={data.phone}
                        inputProps={{
                            required: true
                        }}
                    />
                </Form.Item>
                <Form.Item label="Website link (if applicable)">
                    <Input
                        // prefix={<HeatMapOutlined />}
                        onChange={(e) => setData({ ...data, website: e.target.value })}
                        value={data.website}
                    />
                </Form.Item>
                <Form.Item label="Facebook link (if applicable)">
                    <Input
                        prefix={<FacebookOutlined />}
                        onChange={(e) => setData({ ...data, facebook: e.target.value })}
                        value={data.facebook}
                        />
                </Form.Item>
                <Form.Item label="Tik tok link (if applicable)">
                    <Input
                        // prefix={<Tic />}
                        onChange={(e) => setData({ ...data, tikTok: e.target.value })}
                        value={data.tikTok}
                    />
                </Form.Item>
                <Form.Item label="X link (if applicable)">
                    <Input
                        prefix={<TwitterOutlined />}
                        onChange={(e) => setData({ ...data, twitter: e.target.value })}
                        value={data.twitter}
                        />
                </Form.Item>
                <Form.Item label="Instagram link (if applicable)">
                    <Input
                        prefix={<InstagramOutlined />}
                        onChange={(e) => setData({ ...data, insta: e.target.value })}
                        value={data.insta}
                        />
                </Form.Item>
                {/* <Form.Item label="Contact preference for appointments">
                    <Input
                        onChange={(e) => setData({ ...data, contact: e.target.value })}
                        value={data.contact}
                    />
                </Form.Item> */}
                {/* <Form.Item label="Availability for appointments">
                    <Input
                        onChange={(e) => setData({ ...data, appointement: e.target.value })}
                        value={data.appointement}
                    />
                </Form.Item> */}
                
                <Button onClick={prevStep}>Back</Button>
                {/* <Popconfirm
                    title="Confirmez votre demande"
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                    okText="Yes"
                    cancelText="No"
                > */}
                    <Button onClick={submitForm}>Submit</Button>
                {/* </Popconfirm> */}
            </Form>
        </Box>
    );
}
