import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const WalletEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="score" source="score" />
        <TextInput label="walletAddress" source="walletAddress" />
      </SimpleForm>
    </Edit>
  );
};
