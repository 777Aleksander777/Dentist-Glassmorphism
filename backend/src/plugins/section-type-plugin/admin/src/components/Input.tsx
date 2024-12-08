// // import * as React from "react";

// // import { useIntl } from "react-intl";

// // const Input = React.forwardRef((props, ref) => {
// //   const { attribute, disabled, intlLabel, name, onChange, required, value } =
// //     props; // these are just some of the props passed by the content-manager

// //   const { formatMessage } = useIntl();

// //   const handleChange = (e) => {
// //     onChange({
// //       target: { name, type: attribute.type, value: e.currentTarget.value },
// //     });
// //   };

// //   return (
// //     <label>
// //       {formatMessage(intlLabel)}
// //       <input
// //         ref={ref}
// //         name={name}
// //         disabled={disabled}
// //         value={value}
// //         required={required}
// //         onChange={handleChange}
// //       />
// //     </label>
// //   );
// // });

// // export default Input;

// import * as React from "react";
// import { useIntl, MessageDescriptor } from "react-intl";

// interface InputProps {
//   attribute: { type: string };
//   disabled?: boolean;
//   intlLabel: MessageDescriptor;
//   name: string;
//   onChange: (event: { target: { name: string; type: string; value: string } }) => void;
//   required?: boolean;
//   value: string;
// }

// const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
//   const { attribute, disabled, intlLabel, name, onChange, required, value } = props;

//   const { formatMessage } = useIntl();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onChange({
//       target: { name, type: attribute.type, value: e.currentTarget.value },
//     });
//   };

//   return (
//     <label>
      
//       <input
//         ref={ref}
//         name={value}
//         disabled={disabled}
//         value={value}
//         required={required}
//         onChange={handleChange}
//       />
//     </label>
//   );
// });

// export default Input;

import * as React from 'react';

import {
  Button,
  Box,
  Field,
  Flex,
  Popover,
  Typography,
  useComposedRefs,
} from '@strapi/design-system';
import { CaretDown } from '@strapi/icons';
import { useField, type InputProps, type FieldValue } from '@strapi/strapi/admin';
import { HexColorPicker } from 'react-colorful';
import { useIntl } from 'react-intl';
import { styled } from 'styled-components';

import { getTranslation } from '../utils/getTranslation';

const ColorPreview = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: ${(props) => props.color};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const ColorPicker = styled(HexColorPicker)`
  && {
    width: 100%;
    aspect-ratio: 1.5;
  }

  .react-colorful__pointer {
    width: ${({ theme }) => theme.spaces[3]};
    height: ${({ theme }) => theme.spaces[3]};
  }

  .react-colorful__saturation {
    border-radius: ${({ theme }) => theme.spaces[1]};
    border-bottom: none;
  }

  .react-colorful__hue {
    border-radius: 10px;
    height: ${({ theme }) => theme.spaces[3]};
    margin-top: ${({ theme }) => theme.spaces[2]};
  }
`;

const ColorPickerToggle = styled(Button)`
  & > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  svg {
    width: ${({ theme }) => theme.spaces[2]};
    height: ${({ theme }) => theme.spaces[2]};
  }

  svg > path {
    fill: ${({ theme }) => theme.colors.neutral500};
    justify-self: flex-end;
  }
`;

const ColorPickerPopover = styled(Popover.Content)`
  padding: ${({ theme }) => theme.spaces[2]};
  min-height: 270px;
`;

type ColorPickerInputProps = InputProps &
  FieldValue & {
    labelAction?: React.ReactNode;
  };

const Input = React.forwardRef<HTMLButtonElement, ColorPickerInputProps>(
  (
    { hint, disabled = false, labelAction, label, name, required = false, onChange, value, error },
    forwardedRef
  ) => {
    const [showColorPicker, setShowColorPicker] = React.useState(false);
    const colorPickerButtonRef = React.useRef<HTMLButtonElement>(null!);
    const { formatMessage } = useIntl();
    const [col, setCol] = React.useState(value.col || '#000000');
    const [text, setText] = React.useState(value.text || "HELLO");
    let color = value.col || '#000000';

    React.useEffect(() => {
      if(col !== '#ffffff') {
        setText("HELLO!");
      }
      onChange(name, {"col": col, "text": text})
    }, [col, text])
    
    console.log(value.col)
    const composedRefs = useComposedRefs(forwardedRef, colorPickerButtonRef);

    return (
      <Field.Root name={name} id={name} error={error} hint={hint} required={required}>
        <Flex direction="column" alignItems="stretch" gap={1}>

          <Field.Label action={labelAction}>
            {label}
          </Field.Label>

          <Popover.Root onOpenChange={setShowColorPicker}>
            <Popover.Trigger>
              <ColorPickerToggle
                ref={composedRefs}
                aria-label={formatMessage({
                  id: getTranslation('section-type-plugin.toggle.aria-label'),
                  defaultMessage: 'Color picker toggle',
                })}
                aria-controls="color-picker-value"
                aria-haspopup="dialog"
                aria-expanded={showColorPicker}
                aria-disabled={disabled}
                disabled={disabled}
                variant="tertiary"
                size="L"
              >
                <Flex>
                  <ColorPreview color={color} />
                  <Typography
                    style={{ textTransform: 'uppercase' }}
                    textColor={color ? undefined : 'neutral600'}
                    variant="omega"
                  >
                    {color}
                  </Typography>
                </Flex>
                <CaretDown aria-hidden />
              </ColorPickerToggle>
            </Popover.Trigger>
            <ColorPickerPopover sideOffset={4}>
              <ColorPicker color={color} onChange={(hexValue) => setCol(hexValue)} />
              <Flex paddingTop={3} paddingLeft={4} justifyContent="flex-end">
                <Box paddingRight={2}>
                  <Typography variant="omega" tag="label" textColor="neutral600">
                    {formatMessage({
                      id: getTranslation('section-type-plugin.input.format'),
                      defaultMessage: 'HEX',
                    })}
                  </Typography>
                </Box>
                <Field.Root>
                  <Field.Input
                    aria-label={formatMessage({
                      id: getTranslation('section-type-plugin.input.aria-label'),
                      defaultMessage: 'Color picker input',
                    })}
                    style={{ textTransform: 'uppercase' }}
                    value={color}
                    placeholder="#000000"
                    onChange={setCol}
                  />
                </Field.Root>
              </Flex>
            </ColorPickerPopover>
          </Popover.Root>

          {col === "#ffffff" ? (
            <Field.Root>
              <Field.Label>firstName</Field.Label>
              <Field.Input onChange={(e) => setText(e.currentTarget.value)} value={text} type="text" placeholder="Ted Lasso" />
            </Field.Root>
        ) : (
          <></>
        )}

          <Field.Hint />
          <Field.Error />
        </Flex>
      </Field.Root>
    );
  }
);

export default Input