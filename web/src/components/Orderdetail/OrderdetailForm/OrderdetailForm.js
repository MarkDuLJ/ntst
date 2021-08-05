import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const OrderdetailForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.orderdetail?.id)
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
          name="orderitem_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Orderitem id
        </Label>
        <NumberField
          name="orderitem_id"
          defaultValue={props.orderdetail?.orderitem_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="orderitem_id" className="rw-field-error" />

        <Label
          name="prod_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prod id
        </Label>
        <NumberField
          name="prod_id"
          defaultValue={props.orderdetail?.prod_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="prod_id" className="rw-field-error" />

        <Label
          name="oid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Oid
        </Label>
        <NumberField
          name="oid"
          defaultValue={props.orderdetail?.oid}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="oid" className="rw-field-error" />

        <Label
          name="quantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantity
        </Label>
        <NumberField
          name="quantity"
          defaultValue={props.orderdetail?.quantity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="quantity" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OrderdetailForm
