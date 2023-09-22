"use client"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {memo, useCallback} from "react";
import axios from "axios";
import {useRepos} from "@/app/context/repos.context";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast, useToast} from "@/components/ui/use-toast";

interface FormComponentProps {

}

const SearchSchema = z.object({
  name: z.string({ required_error: "O nome do usuário é obrigatório."}).nonempty("Digite o nome do usuário")
})

type SearchSchemaType = z.infer<typeof SearchSchema>;

function FormComponent({}: FormComponentProps) {
  const form = useForm<SearchSchemaType>({
    resolver: zodResolver(SearchSchema as any)
  })
  const { handleSubmit, control, formState: {isSubmitting}} = form;
  const {onReposChange} = useRepos();

  const handleSearchRepos = useCallback(async ({name}: SearchSchemaType) => {
    const response = await axios.get(`https://api.github.com/users/${name}/repos`);
    onReposChange(response.data);
  }, [onReposChange]);

  return (
    <Form {...form} >
      <form onSubmit={handleSubmit(handleSearchRepos)} className={"flex gap-2 w-full"}>
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem className={"flex-grow"}>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant={"default"} type={"submit"}>{isSubmitting ? "Pesquisando..." : "Pesquisar" }</Button>
      </form>
    </Form>
  )
}

export const FormSearch = memo(FormComponent)
