import { Container } from './styled';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function Select({ options, label }) {
  return (
    <Container>
      <Autocomplete
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
