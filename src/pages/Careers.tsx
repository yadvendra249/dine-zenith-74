import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import careersImage from '@/assets/careers-team.jpg';

const jobOpenings = [
  {
    id: 1,
    title: 'Head Chef',
    department: 'Kitchen',
    location: 'Main Branch',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead our culinary team in creating authentic Indian dishes. Must have expertise in North and South Indian cuisine.',
  },
  {
    id: 2,
    title: 'Sous Chef',
    department: 'Kitchen',
    location: 'Main Branch',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Support the Head Chef in daily kitchen operations, food preparation, and maintaining quality standards.',
  },
  {
    id: 3,
    title: 'Restaurant Manager',
    department: 'Management',
    location: 'All Branches',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Oversee daily restaurant operations, manage staff, ensure customer satisfaction, and drive business growth.',
  },
  {
    id: 4,
    title: 'Waiter/Waitress',
    department: 'Service',
    location: 'All Branches',
    type: 'Full-time',
    experience: '1+ years',
    description: 'Provide excellent customer service, take orders, serve food, and ensure a pleasant dining experience.',
  },
  {
    id: 5,
    title: 'Kitchen Helper',
    department: 'Kitchen',
    location: 'All Branches',
    type: 'Full-time',
    experience: 'Entry Level',
    description: 'Assist chefs with food preparation, maintain cleanliness, and support kitchen operations.',
  },
  {
    id: 6,
    title: 'Delivery Driver',
    department: 'Delivery',
    location: 'All Branches',
    type: 'Part-time',
    experience: 'Entry Level',
    description: 'Deliver orders to customers promptly and safely. Must have a valid driver license and own vehicle.',
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Join Our <span className="gradient-primary bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of a passionate team dedicated to serving authentic Indian cuisine
            </p>
          </div>

          {/* Team Image */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-elegant max-w-5xl mx-auto">
            <img src={careersImage} alt="IndianFood Team" className="w-full h-[400px] object-cover" />
          </div>

          {/* Why Join Us */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-warm transition-smooth">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="text-xl font-bold mb-2">Competitive Salary</h3>
                  <p className="text-muted-foreground">
                    We offer attractive compensation packages and regular performance-based increments.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-warm transition-smooth">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">📚</div>
                  <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
                  <p className="text-muted-foreground">
                    Access to training programs and clear career advancement paths within the organization.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-warm transition-smooth">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🏥</div>
                  <h3 className="text-xl font-bold mb-2">Health Benefits</h3>
                  <p className="text-muted-foreground">
                    Comprehensive health insurance coverage for you and your family members.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-warm transition-smooth">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🎉</div>
                  <h3 className="text-xl font-bold mb-2">Positive Culture</h3>
                  <p className="text-muted-foreground">
                    Work in a friendly, supportive environment that values teamwork and creativity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Job Openings */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="hover:shadow-warm transition-smooth">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="default">{job.department}</Badge>
                          <Badge variant="secondary">{job.type}</Badge>
                          <Badge variant="outline">{job.location}</Badge>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 w-full md:w-auto">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{job.description}</p>
                    <p className="text-sm font-semibold">
                      <span className="text-primary">Experience Required:</span> {job.experience}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <Card className="shadow-warm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Don't See Your Role?</h3>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented individuals. Send your resume to{' '}
                  <span className="text-primary font-semibold">careers@indianfood.com</span>
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Send Your Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
