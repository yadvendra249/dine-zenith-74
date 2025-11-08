import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users } from 'lucide-react';
import { toast } from 'sonner';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required').max(100, 'Name must be less than 100 characters'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required').matches(/^[0-9]{10}$/, 'Phone must be 10 digits'),
  guests: Yup.number().required('Number of guests is required').min(1).max(20),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
});

const ReservationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      guests: '2',
      date: '',
      time: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Reservation:', values);
      toast.success('Reservation request submitted! We will confirm shortly.');
      formik.resetForm();
    },
  });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-2">
                Reserve Your <span className="gradient-primary bg-clip-text text-transparent">Table</span>
              </CardTitle>
              <CardDescription className="text-base">
                Book your dining experience with us. We look forward to serving you!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your full name"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-destructive text-sm mt-1">{formik.errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="your@email.com"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-destructive text-sm mt-1">{formik.errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="10 digit number"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="text-destructive text-sm mt-1">{formik.errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select
                    value={formik.values.guests}
                    onValueChange={(value) => formik.setFieldValue('guests', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={String(num)}>
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4" />
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="pl-10"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    {formik.touched.date && formik.errors.date && (
                      <p className="text-destructive text-sm mt-1">{formik.errors.date}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="time">Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="pl-10"
                      />
                    </div>
                    {formik.touched.time && formik.errors.time && (
                      <p className="text-destructive text-sm mt-1">{formik.errors.time}</p>
                    )}
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-lg shadow-warm">
                  Reserve Table
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
