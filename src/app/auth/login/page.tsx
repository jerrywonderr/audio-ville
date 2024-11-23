import TextInput from "@/lib/components/form/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const Page = () => {
  const methods = useForm({ mode: "all", resolver: yupResolver(schema) });

  return (
    <div className="h-[100vh] w-[100vw] grid place-content-center">
      <div className="max-w-screen-md bg-fuchsia-50 px-12 py-12 w-96">
        <FormProvider {...methods}>
          <form className="flex flex-col gap-y-4">
            <div>
              <h1 className="text-2xl font-semibold">Welcome back,</h1>
              <p className="text-sm">Login to continue</p>
            </div>
            <div className="mt-4">
              <TextInput
                name="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-y-1.5">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your email here"
                className="border-3 border-fuchsia-500 text-center bg-fuchsia-100 px-4 py-3 rounded-md"
              />
            </div>
            <button className="bg-fuchsia-500 px-4 py-3 rounded-md text-white font-bold">
              LOGIN
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Page;
