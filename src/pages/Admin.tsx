import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,
  User 
} from 'firebase/auth';
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  setDoc, 
  addDoc, 
  deleteDoc, 
  updateDoc 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';
import { auth, db, storage } from '@/lib/firebase';
import { useContent } from '@/context/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle, Loader2, Upload, Trash2, Edit, Plus } from 'lucide-react';
import { FeaturedWork, Testimonial } from '@/types/content';

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('featured-works');
  const [uploadProgress, setUploadProgress] = useState<{[key: string]: number}>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const { content, refreshContent } = useContent();
  const navigate = useNavigate();

  // Authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthError(null);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setAuthError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Handle image upload
  const handleImageUpload = async (file: File, path: string) => {
    if (!file) return null;
    
    try {
      const storageRef = ref(storage, `${path}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  // Handle featured work form submission
  const handleFeaturedWorkSubmit = async (e: React.FormEvent<HTMLFormElement>, editId?: string) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const title = formData.get('title') as string;
      const category = formData.get('category') as string;
      const videoId = formData.get('videoId') as string;
      const thumbnailFile = formData.get('thumbnail') as File;
      
      let thumbnailUrl = '';
      
      // If editing and no new thumbnail, use existing
      if (editId && (!thumbnailFile || thumbnailFile.size === 0)) {
        const existingWork = content.featuredWorks?.find(w => w.id === editId);
        if (existingWork) {
          thumbnailUrl = existingWork.thumbnail;
        }
      } else if (thumbnailFile && thumbnailFile.size > 0) {
        // Upload new thumbnail
        thumbnailUrl = await handleImageUpload(thumbnailFile, 'featured-works');
      }
      
      const workData = {
        title,
        category,
        videoId,
        thumbnail: thumbnailUrl,
      };
      
      if (editId) {
        // Update existing work
        await updateDoc(doc(db, 'featuredWorks', editId), workData);
        setSuccessMessage('Featured work updated successfully!');
      } else {
        // Add new work
        await addDoc(collection(db, 'featuredWorks'), workData);
        setSuccessMessage('New featured work added successfully!');
      }
      
      // Reset form and refresh content
      form.reset();
      refreshContent();
      
    } catch (error) {
      console.error('Error saving featured work:', error);
      setError('Failed to save featured work. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle delete featured work
  const handleDeleteFeaturedWork = async (id: string, thumbnailUrl: string) => {
    if (!confirm('Are you sure you want to delete this featured work?')) return;
    
    setLoading(true);
    try {
      // Delete from Firestore
      await deleteDoc(doc(db, 'featuredWorks', id));
      
      // Delete image from Storage if it's a Firebase storage URL
      if (thumbnailUrl.includes('firebase')) {
        const imageRef = ref(storage, thumbnailUrl);
        await deleteObject(imageRef);
      }
      
      setSuccessMessage('Featured work deleted successfully!');
      refreshContent();
    } catch (error) {
      console.error('Error deleting featured work:', error);
      setError('Failed to delete featured work. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Login form if not authenticated
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-secondary">
        <Helmet>
          <title>Admin Login | Vynora Wedding</title>
        </Helmet>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Log in to manage your website content</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              {authError && (
                <div className="text-red-500 text-sm flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  {authError}
                </div>
              )}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                    Logging in...
                  </>
                ) : (
                  'Log In'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary pb-20">
      <Helmet>
        <title>Admin Dashboard | Vynora Wedding</title>
      </Helmet>
      
      <header className="bg-background border-b py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vynora Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Logged in as {user.email}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>Log Out</Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="featured-works">Featured Works</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="hero">Hero Section</TabsTrigger>
            <TabsTrigger value="about">About Section</TabsTrigger>
            <TabsTrigger value="wedding-video">Wedding Video</TabsTrigger>
          </TabsList>
          
          {/* Featured Works Tab */}
          <TabsContent value="featured-works">
            <div className="grid gap-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Featured Works</h2>
                <Button onClick={() => document.getElementById('add-featured-work-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Plus className="h-4 w-4 mr-2" /> Add New Work
                </Button>
              </div>
              
              {/* Display existing featured works */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.featuredWorks?.map((work: FeaturedWork) => (
                  <Card key={work.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <img 
                        src={work.thumbnail} 
                        alt={work.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-xs text-gold uppercase tracking-wider">{work.category}</span>
                          <CardTitle className="text-lg mt-1">{work.title}</CardTitle>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => handleDeleteFeaturedWork(work.id, work.thumbnail)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              
              {/* Add new featured work form */}
              <Card id="add-featured-work-form" className="mt-8">
                <CardHeader>
                  <CardTitle>Add New Featured Work</CardTitle>
                  <CardDescription>Add a new project to your featured works section</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFeaturedWorkSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" name="title" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Input id="category" name="category" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="videoId">Video ID</Label>
                      <Input id="videoId" name="videoId" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="thumbnail">Thumbnail Image</Label>
                      <Input id="thumbnail" name="thumbnail" type="file" accept="image/*" required />
                    </div>
                    
                    {error && (
                      <div className="text-red-500 text-sm flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {error}
                      </div>
                    )}
                    
                    {successMessage && (
                      <div className="text-green-500 text-sm flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        {successMessage}
                      </div>
                    )}
                    
                    <Button type="submit" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                          Saving...
                        </>
                      ) : (
                        'Save Featured Work'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Other tabs would be implemented similarly */}
          <TabsContent value="testimonials">
            <h2 className="text-2xl font-bold mb-4">Testimonials Management</h2>
            <p>Testimonials management interface will be implemented here.</p>
          </TabsContent>
          
          <TabsContent value="hero">
            <h2 className="text-2xl font-bold mb-4">Hero Section Management</h2>
            <p>Hero section management interface will be implemented here.</p>
          </TabsContent>
          
          <TabsContent value="about">
            <h2 className="text-2xl font-bold mb-4">About Section Management</h2>
            <p>About section management interface will be implemented here.</p>
          </TabsContent>
          
          <TabsContent value="wedding-video">
            <h2 className="text-2xl font-bold mb-4">Wedding Video Section Management</h2>
            <p>Wedding video section management interface will be implemented here.</p>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin; 