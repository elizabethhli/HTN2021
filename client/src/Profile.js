import React, { useState } from 'react';

import { Box, FormField, Grommet, Select, TextInput, Form, Button } from 'grommet';
import { grommet } from 'grommet/themes';

const uniOptions = ["Carleton University", "University of Toronto"];
const programOptions = ["Engineering", "Commerce", "Computer Science"];

export default function Profile() {
    const [options, setOptions] = useState(uniOptions);
    const [value, setValue] = useState('');
    const onChange = event => setValue(event.target.value);

    return (
        <Grommet full theme={grommet}>
            <Box pad="large" gap="medium" direction="row" >
          <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onSubmit={({ value: nextValue }) => console.log(nextValue)}
          >
            <FormField label="Name" name="name" required>
              <TextInput name="name" type="name" />
            </FormField>
          </Form>
      </Box>

      <Box pad="large" gap="medium" direction="row" >
          <FormField label="What University do you attend?" name="select">
        <Select
          size="medium"
          placeholder="Select single option"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          onClose={() => setOptions(uniOptions)}
          onSearch={text => {
            // The line below escapes regular expression special characters:
            // [ \ ^ $ . | ? * + ( )
            const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

            // Create the regular expression with modified value which
            // handles escaping special characters. Without escaping special
            // characters, errors will appear in the console
            const exp = new RegExp(escapedText, 'i');
            setOptions(uniOptions.filter(o => exp.test(o)));
          }}
        />
        </FormField>
        </Box>
        <Box pad="large" gap="medium" direction="row" >
          <FormField label="What program are you in?" name="select">
        <Select
          size="medium"
          placeholder="Select single option"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          onClose={() => setOptions(programOptions)}
          onSearch={text => {
            // The line below escapes regular expression special characters:
            // [ \ ^ $ . | ? * + ( )
            const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

            // Create the regular expression with modified value which
            // handles escaping special characters. Without escaping special
            // characters, errors will appear in the console
            const exp = new RegExp(escapedText, 'i');
            setOptions(programOptions.filter(o => exp.test(o)));
          }}
        />
        </FormField>
        </Box>
                
    </Grommet>
  );
};

    