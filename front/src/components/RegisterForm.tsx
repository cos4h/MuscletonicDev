// RegisterForm.js
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { register } from "@/services/auth";
import { IUserRegister } from "@/interfaces/IUserRegister";
import z from "zod";
import registerSchema from "@/zod/registerSchema";

interface RegisterFormProps {
  setTab: React.Dispatch<React.SetStateAction<"signup" | "signin">>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  registerForm: UseFormReturn<z.infer<typeof registerSchema>>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  setTab,
  setIsLoading,
  registerForm,
}) => {
  const { toast } = useToast();

  const handleRegisterSubmit = async (
    values: z.infer<typeof registerSchema>
  ) => {
    setIsLoading(true);
    const { email, firstName, lastName, dni, password } = values;

    const userToRegister: IUserRegister = {
      user: {
        email,
        firstName,
        lastName,
        dni,
      },
      credentials: password,
    };

    register(userToRegister)
      .then(() => {
        setIsLoading(false);
        setTab("signin");
        toast({
          variant: "default",
          title: "Register Success",
          description: "User was registered with exit",
          className: "bg-green-800 text-white",
          duration: 2000,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);

        toast({
          variant: "destructive",
          title: error.response.data.message,
          description: "",
          duration: 3000,
        });
      });
  };

  return (
    <form
      onSubmit={registerForm.handleSubmit(handleRegisterSubmit)}
      className="space-y-8"
    >
      <div className="block md:flex w-full  justify-around">
        <FormField
          control={registerForm.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input
                  placeholder="maria"
                  type="text"
                  {...field}
                  className="md:w-[220px]"
                />
              </FormControl>
              <FormDescription>This is your first name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Rodriguez"
                  type="text"
                  {...field}
                  className="md:w-[220px]"
                />
              </FormControl>
              <FormDescription>This is your last name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="block md:flex w-full  justify-around">
        <FormField
          control={registerForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="maria@gmail.com"
                  type="text"
                  {...field}
                  className="md:w-[200px]"
                />
              </FormControl>
              <FormDescription>This is your personal email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="dni"
          render={({ field }) => (
            <FormItem>
              <FormLabel>DNI</FormLabel>
              <FormControl>
                <Input
                  placeholder="10543432"
                  type="text"
                  {...field}
                  className="md:w-[200px]"
                />
              </FormControl>
              <FormDescription>This is your DNI number</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="block md:flex w-full  justify-around">
        <FormField
          control={registerForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="***********************"
                  type="password"
                  {...field}
                  className="md:w-[200px]"
                />
              </FormControl>
              <FormDescription>This is your private key.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input
                  placeholder="***********************"
                  type="password"
                  {...field}
                  className="md:w-[200px]"
                />
              </FormControl>
              <FormDescription>This is your private key.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button
        className="w-1/2 block mx-auto  bg-sky-600 hover:bg-sky-400"
        type="submit"
      >
        Sign up
      </Button>
    </form>
  );
};

export default RegisterForm;
