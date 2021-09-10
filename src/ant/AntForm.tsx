/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Slider
} from "antd";

const AntForm = (): JSX.Element => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }: any) => {
    setComponentSize(size);
  };

  const onChange = (value: any) => {
    console.log("onChange: ", value);
  };

  const onAfterChange = (value: any) => {
    console.log("onAfterChange: ", value);
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4
        }}
        wrapperCol={{
          span: 14
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as any}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [
                  {
                    title: "Bamboo",
                    value: "bamboo"
                  }
                ]
              }
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou"
                  }
                ]
              }
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>

      <Slider
        defaultValue={30}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
      <Slider
        range
        step={10}
        defaultValue={[20, 50]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </>
  );
};

export default AntForm;
