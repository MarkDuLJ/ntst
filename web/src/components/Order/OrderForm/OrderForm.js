import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const OrderForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.order?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="order_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order id
        </Label>
        <NumberField
          name="order_id"
          defaultValue={props.order?.order_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="order_id" className="rw-field-error" />

        <Label
          name="order_date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order date
        </Label>
        <DatetimeLocalField
          name="order_date"
          defaultValue={formatDatetime(props.order?.order_date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="order_date" className="rw-field-error" />

        <Label
          name="cus_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cus id
        </Label>
        <NumberField
          name="cus_id"
          defaultValue={props.order?.cus_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="cus_id" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OrderForm
