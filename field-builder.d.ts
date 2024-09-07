interface Field {
    name: string;
    validation: (value: any) => Promise<string | null>;
    type?: string;
    className?: string;
    style?: React.CSSProperties;
    placeholder?: string;
}
interface FieldBuilderWithValidationProps {
    fields: Field[];
    onSubmit: (values: any) => void;
    validateForm?: (values: Record<string, any>) => Promise<boolean>;
    submitButton?: boolean;
    submitButtonText?: string;
    submitButtonClassName?: string;
    formSubmitLoading?: boolean;
    errorMessageClassName?: string;
    submitLoadingButtonClassName?: string;
}
/**
 * FieldBuilderWithValidation is a component that allows for the creation of a form with validation.
 * @param {Field[]} fields - The fields to be displayed in the form.
 * @param {Function} onSubmit - The function to be called when the form is submitted.
 * @param {boolean} submitButton - Whether to display a submit button.
 * @param {string} submitButtonText - The text to be displayed on the submit button.
 * @param {string} submitButtonClassName - The class name to be applied to the submit button.
 * @param {boolean} formSubmitLoading - Whether the form is currently submitting.
 * @param {string} errorMessageClassName - The class name to be applied to the error message.
 * @param {string} submitLoadingButtonClassName - The class name to be applied to the submit button when loading.
 */
export declare const FieldBuilderWithValidation: ({ fields, onSubmit, submitButton, submitButtonText, submitButtonClassName, formSubmitLoading, errorMessageClassName, submitLoadingButtonClassName, }: FieldBuilderWithValidationProps) => import("react/jsx-runtime").JSX.Element;
export {};
