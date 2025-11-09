import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '@/store/slices/cartSlice';
import { CreditCard, Smartphone, Wallet, Plus, Minus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const { toast } = useToast();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Processing",
      description: `Processing payment of ₹${total} via ${paymentMethod.toUpperCase()}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="gradient-primary bg-clip-text text-transparent">Checkout</span>
            </h1>
            <p className="text-lg text-muted-foreground">Complete your order</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="shadow-warm sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  {items.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6">
                        {items.map((item) => (
                          <div key={item.id} className="space-y-2">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-muted-foreground">₹{item.price} each</p>
                              </div>
                              <p className="font-bold">₹{item.price * item.quantity}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => dispatch(decreaseQuantity(item.id))}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-12 text-center font-semibold">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => dispatch(increaseQuantity(item.id))}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 ml-auto text-destructive"
                                onClick={() => dispatch(removeFromCart(item.id))}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
...
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Payment Section */}
            <div className="lg:col-span-2">
              <form onSubmit={handlePayment}>
                <div className="space-y-6">
                  {/* Delivery Information */}
                  <Card className="shadow-warm">
                    <CardHeader>
                      <CardTitle>Delivery Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" placeholder="Enter your name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="Enter phone number" required />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                          <Label htmlFor="address">Delivery Address</Label>
                          <Input id="address" placeholder="Enter complete address" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="City" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pincode">Pincode</Label>
                          <Input id="pincode" placeholder="Pincode" required />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Method */}
                  <Card className="shadow-warm">
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="space-y-4">
                          {/* UPI */}
                          <Card className={`cursor-pointer transition-smooth ${paymentMethod === 'upi' ? 'border-primary shadow-md' : ''}`}>
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-4">
                                <RadioGroupItem value="upi" id="upi" />
                                <Label htmlFor="upi" className="flex items-center gap-3 cursor-pointer flex-1">
                                  <Smartphone className="h-6 w-6 text-primary" />
                                  <div>
                                    <p className="font-semibold">UPI</p>
                                    <p className="text-sm text-muted-foreground">Pay using Google Pay, PhonePe, Paytm</p>
                                  </div>
                                </Label>
                              </div>
                              {paymentMethod === 'upi' && (
                                <div className="mt-4 space-y-2">
                                  <Label htmlFor="upiId">UPI ID</Label>
                                  <Input id="upiId" placeholder="yourname@upi" />
                                </div>
                              )}
                            </CardContent>
                          </Card>

                          {/* Credit/Debit Card */}
                          <Card className={`cursor-pointer transition-smooth ${paymentMethod === 'card' ? 'border-primary shadow-md' : ''}`}>
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-4">
                                <RadioGroupItem value="card" id="card" />
                                <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                                  <CreditCard className="h-6 w-6 text-primary" />
                                  <div>
                                    <p className="font-semibold">Credit / Debit Card</p>
                                    <p className="text-sm text-muted-foreground">Visa, Mastercard, RuPay</p>
                                  </div>
                                </Label>
                              </div>
                              {paymentMethod === 'card' && (
                                <div className="mt-4 space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="cardNumber">Card Number</Label>
                                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" maxLength={19} />
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="expiry">Expiry Date</Label>
                                      <Input id="expiry" placeholder="MM/YY" />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="cvv">CVV</Label>
                                      <Input id="cvv" placeholder="123" maxLength={3} />
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="cardName">Cardholder Name</Label>
                                    <Input id="cardName" placeholder="Name on card" />
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>

                          {/* Razorpay */}
                          <Card className={`cursor-pointer transition-smooth ${paymentMethod === 'razorpay' ? 'border-primary shadow-md' : ''}`}>
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-4">
                                <RadioGroupItem value="razorpay" id="razorpay" />
                                <Label htmlFor="razorpay" className="flex items-center gap-3 cursor-pointer flex-1">
                                  <Wallet className="h-6 w-6 text-primary" />
                                  <div>
                                    <p className="font-semibold">Razorpay</p>
                                    <p className="text-sm text-muted-foreground">Secure payment via Razorpay Gateway</p>
                                  </div>
                                </Label>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Cash on Delivery */}
                          <Card className={`cursor-pointer transition-smooth ${paymentMethod === 'cod' ? 'border-primary shadow-md' : ''}`}>
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-4">
                                <RadioGroupItem value="cod" id="cod" />
                                <Label htmlFor="cod" className="flex items-center gap-3 cursor-pointer flex-1">
                                  <Wallet className="h-6 w-6 text-primary" />
                                  <div>
                                    <p className="font-semibold">Cash on Delivery</p>
                                    <p className="text-sm text-muted-foreground">Pay when you receive</p>
                                  </div>
                                </Label>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </RadioGroup>
                    </CardContent>
                  </Card>

                  {/* Place Order Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={items.length === 0}
                  >
                    Place Order - ₹{Math.round(total * 1.05 + 50)}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
