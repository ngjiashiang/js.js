import { useState, useEffect } from "react";

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
export const FieldBuilderWithValidation = ({
    fields,
    onSubmit,
    submitButton = false,
    submitButtonText = "Submit",
    submitButtonClassName = "",
    formSubmitLoading = false,
    errorMessageClassName = "",
    submitLoadingButtonClassName = "",
}: FieldBuilderWithValidationProps) => {
    const [values, setValues] = useState<Record<string, any>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isFormValid, setIsFormValid] = useState(false);

    const validateAllFields = async () => {
        const fieldValidations = fields.map(async field => {
            try {
                await field.validation(values[field.name]);
                return null;
            } catch (error: any) {
                return error.message;
            }
        });
        const results = await Promise.all(fieldValidations);
        setIsFormValid(results.every(result => result === null));
    };

    useEffect(() => {
        validateAllFields();
    }, [fields, values]);

    const validateField = async (fieldName: string, currentValues: Record<string, any>) => {
        const field = fields.find((field) => field.name === fieldName);

        if (!field) {
            return;
        }

        try {
            await field.validation(currentValues[fieldName]);
            setErrors(prevErrors => ({
                ...prevErrors,
                [fieldName]: "",
            }));
        } catch (error: any) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [fieldName]: error?.message || "Validation failed",
            }));
        }
    };

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setTouched({
            ...touched,
            [event.target.name]: true,
        });

        const newValues = {
            ...values,
            [event.target.name]: event.target.value,
        };
        setValues(newValues);

        await validateField(event.target.name, newValues);
    };

    const handleBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
        setTouched({
            ...touched,
            [event.target.name]: true,
        });

        await validateField(event.target.name, values);
    };

    const handleSubmitButtonClicked = () => {
        handleSubmit()
    };

    const handleSubmit = async () => {
        const newErrors: Record<string, string> = {};
        let hasErrors = false;

        for (const field of fields) {
            try {
                await field.validation(values[field.name]);
            } catch (error: any) {
                newErrors[field.name] = error?.message || "Validation failed";
                hasErrors = true;
            }
        }

        if (!hasErrors) {
            try {
                await onSubmit(values);
            } catch (error) {
                console.error("Submit error:", error);
                // Handle submit error (e.g., set a general form error state)
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div>
            {fields.map((field) => (
                <div key={field.name}>
                    <input
                        type={field.type || "text"}
                        name={field.name}
                        className={field.className}
                        style={field.style || {}}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[field.name] || ""}
                        placeholder={field.placeholder || ""}
                    />
                    {touched[field.name] && errors[field.name] && (
                        <div className={errorMessageClassName}>{errors[field.name]}</div>
                    )}
                </div>
            ))}
            {submitButton && 
                <button 
                    onClick={handleSubmitButtonClicked}
                    className={formSubmitLoading ? submitLoadingButtonClassName : submitButtonClassName}
                    disabled={!isFormValid || formSubmitLoading}>
                    {formSubmitLoading ? submitButtonText : "Loading..."}
                </button>
            }
        </div>
    );
}
