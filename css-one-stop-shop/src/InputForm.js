import { useForm } from "react-cool-form";

const Field = ({ label, id, error, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p>{error}</p>}
  </div>
);

export default function InputForm() {
  const { form, use } = useForm({
    // (Strongly advise) Provide the default values
    defaultValues: { scope: "", attribute: "", marketplace: "" },
    // The event only triggered when the form is valid
    onSubmit: (values) => console.log("onSubmit: ", values),
  });
  // We can enable the "errorWithTouched" option to filter the error of an un-blurred field
  // Which helps the user focus on typing without being annoyed by the error message
  const errors = use("errors", { errorWithTouched: true }); // Default is "false"

  return (
    <form ref={form} noValidate>
      <Field
        label="Scope"
        id="scope"
        name="scope"
        // Support built-in validation
        required
        error={errors.scope}
      />
      <Field
        label="Attribute"
        id="attribute"
        name="attribute"
        required
        error={errors.attribute}
      />
      <Field
        label="Marketplace"
        id="marketplace"
        name="passmarketplaceword"
        required
        error={errors.marketplace}
      />
      <input type="submit" />
    </form>
  );
};
