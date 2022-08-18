import { Form, FormProps } from "app/core/components/Form"
import LabeledTextAreaField from "app/core/components/LabeledTextAreaField"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import TextAreaField from "app/core/components/TextAreaField"
import ThemeCheck from "app/core/components/ThemeCheck"
import { z } from "zod"
export { FORM_ERROR } from "app/core/components/Form"

export function ContactForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props} data-act-class="ACTIVECLASS">
      <LabeledTextField name="name" label="نام" placeholder="نام" />
      <LabeledTextField name="email" label="پست الکترونیک" placeholder="پست الکترونیک" />
      <LabeledTextField name="mobile" label="شماره تماس" placeholder="شماره تماس" />
      <LabeledTextAreaField name="message" label="توضیحات" placeholder="توضیحات" />
    </Form>
  )
}
