import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const WalletCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="score" source="score" />
        <TextInput label="walletAddress" source="walletAddress" />
      </SimpleForm>
    </Create>
  );
};
