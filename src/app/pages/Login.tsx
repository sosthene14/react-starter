import { motion } from "framer-motion";
import {  registerInput, submitBtnClass } from "../style/class";
import { IInputs } from "../interfaces/loginInterface";
import { useLogin } from "../hooks/useLogin";
import { BigLoader } from "../../assets/animations/Loader";

const Login = () => {
  const { handleChange, handleSubmit,isLoading } = useLogin();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-900 dark:to-gray-800"
    >
        <BigLoader isLoading={isLoading} />
      <div className="w-full max-w-md sm:mx-0 mx-4 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <FormSection handleChange={handleChange} />
          </div>
        </form>
      </div>
    </motion.div>
  );
};

const FormSection = ({ handleChange }: IInputs) => (
  <div className="w-full">
    <FormHeader />
    <FormFields handleChange={handleChange} />
    <ForgotPassword />
    <SubmitButton text="Se Connecter" />
  </div>
);

const FormHeader = () => (
  <>
    <div className="mb-6 text-center">
      <h2 className="text-gray-800 dark:text-white text-3xl font-bold font-['Raleway']">
        Se connecter
      </h2>
    </div>
    <div className="mb-6 text-center">
      <p className="text-gray-600 dark:text-gray-300 text-base font-normal font-['Raleway']">
        Connectez-vous pour accéder à votre compte ADMIN ROCOLIS
      </p>
    </div>
  </>
);

const FormFields = ({ handleChange }: IInputs) => (
  <div className="space-y-4">
    <Field label="Identifiant">
      <input
        style={{ width: "100%" }}
        placeholder="Identifiant"
        type="text"
        className={`${registerInput} w-full py-3 px-4`}
        onChange={handleChange}
        required
        name="name"
      />
    </Field>
    <Field label="Mot de passe">
      <input
        required
        name="password"
        onChange={handleChange}
        style={{ width: "100%" }}
        placeholder="Mot de passe"
        type="password"
        className={`${registerInput} w-full py-3 px-4`}
      />
    </Field>
  </div>
);

interface IProps {
  label: string;
  children: React.ReactNode;
}
const Field = ({ label, children }: IProps) => (
  <div className="mb-4 flex flex-col">
    <label
      htmlFor="floating_outlined"
      className="text-gray-600 dark:text-gray-300 text-sm font-medium font-['Raleway'] mb-2"
    >
      {label}
    </label>
    {children}
  </div>
);

const ForgotPassword = () => {
  return (
    <div className="mb-6 text-center">
      <p className="text-gray-600 mt-5 dark:text-gray-300 text-base font-normal font-['Raleway']">
        Mot de passe oublié ? Contactez votre n+1
      </p>
    </div>
  );
};

export const SubmitButton = ({
  text,
  props,
}: {
  text: string;
  props?: React.InputHTMLAttributes<HTMLButtonElement>;
}) => (
  <div className="text-center">
    <button
      {...props}
      type="submit"
      className={submitBtnClass}
    >
      {text}
    </button>
  </div>
);

export { Login };
