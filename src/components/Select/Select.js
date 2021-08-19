import { Container } from './styled';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function Select({ options, label, setValue }) {
  return (
    <Container>
      <Autocomplete
        onChange={(event, newValue) =>
          newValue ? setValue(newValue.title) : setValue(null)
        }
        options={options}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
      />
    </Container>
  );
}

export default Select;
