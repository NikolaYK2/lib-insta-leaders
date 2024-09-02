import { Meta, StoryObj } from '@storybook/react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table'

const meta = {
  component: Table,
  title: 'libITL/Table',
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>
const options = [
  {
    id: '0',
    dateOfPayment: '12.12.2022',
    end: '12.12.2022',
    price: '$10',
    subType: '1 day',
    paymentType: 'Stripe',
  },
  {
    id: '1',
    dateOfPayment: '12.12.2022',
    end: '12.12.2022',
    price: '$10',
    subType: '1 day',
    paymentType: 'Stripe',
  },
  {
    id: '2',
    dateOfPayment: '12.12.2022',
    end: '12.12.2022',
    price: '$10',
    subType: '1 day',
    paymentType: 'Stripe',
  },
  {
    id: '3',
    dateOfPayment: '12.12.2022',
    end: '12.12.2022',
    price: '$10',
    subType: '1 day',
    paymentType: 'Stripe',
  },
]

export const Primary: Story = {
  args: {},
  render: () => {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date of Payment</TableHead>
            <TableHead>End date of subscription</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Subscription Type</TableHead>
            <TableHead>Payment Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {options.map(options => {
            return (
              <TableRow key={options.id}>
                <TableCell>{options.dateOfPayment}</TableCell>
                <TableCell>{options.end}</TableCell>
                <TableCell>{options.price}</TableCell>
                <TableCell>{options.subType}</TableCell>
                <TableCell>{options.paymentType}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  },
}
