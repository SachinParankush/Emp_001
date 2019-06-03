
export const formdataReg = [
  {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-lg-12 col-md-12 col-sm-12',
          key: 'itemName',
          type: 'input',
          templateOptions: {
            label: 'Item Name',
            type: 'input',
             required: true, 
          },
        },
      ]
  },
  {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-lg-12 col-md-12 col-sm-12',
          key: 'quantity',
          type: 'input',
          templateOptions: {
            label: 'Quantity',
            type: 'input',
             required: true,   
          },
        },
      ]
  },
  {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-lg-12 col-md-12 col-sm-12',
          key: 'rate',
          type: 'input',
          templateOptions: {
            label: 'Rate',
            type: 'input',
            required: true,
          },
        },
      ]
  },
  {
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-lg-12 col-md-12 col-sm-12',
        key: 'discription',
        type: 'input',
        templateOptions: {
          label: 'Discription',
          type: 'input',
          required: true,
        },
      },
    ]
}
   
]



