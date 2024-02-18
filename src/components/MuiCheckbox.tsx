import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const MuiCheckbox = () => {
  const [acceptTnC, setacceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ skills });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setacceptTnC(event.target.checked);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label='I accept terms and conditions'
          control={
            <Checkbox
              size='small'
              color='secondary'
              checked={acceptTnC}
              onChange={handleChange}
            ></Checkbox>
          }
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon></BookmarkBorderIcon>}
          checkedIcon={<BookmarkIcon></BookmarkIcon>}
          checked={acceptTnC}
          onChange={handleChange}
        ></Checkbox>
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label='HTML'
              control={
                <Checkbox
                  value='html'
                  checked={skills.includes('html')}
                  onChange={handleSkillChange}
                ></Checkbox>
              }
            ></FormControlLabel>
            <FormControlLabel
              label='CSS'
              control={
                <Checkbox
                  value='css'
                  checked={skills.includes('css')}
                  onChange={handleSkillChange}
                ></Checkbox>
              }
            ></FormControlLabel>
            <FormControlLabel
              label='Javascript'
              value='javascript'
              control={
                <Checkbox
                  checked={skills.includes('javascript')}
                  onChange={handleSkillChange}
                ></Checkbox>
              }
            ></FormControlLabel>
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
