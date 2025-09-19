import React, { useState } from 'react';
import { User, Building2, Sprout, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BusiImg from '../../../assets/businesslogin.png';
import GovtImg from '../../../assets/govtlogin.png';
import FarmerImg from '../../../assets/farmerlogin.png';

const Login = () => {
  const navigate = useNavigate();

  const [currentView, setCurrentView] = useState('roleSelection');
  const [selectedRole, setSelectedRole] = useState(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const roles = [
    {
      id: 'admin',
      name: 'Admin',
      icon: User,
      color: '#8b5cf6',
      hoverColor: '#7c3aed',
      route: '/admin',
      image: GovtImg
    },
    {
      id: 'business',
      name: 'Business',
      icon: Building2,
      color: '#60a5fa',
      hoverColor: '#3b82f6',
      route: '/business',
      image: BusiImg
    },
    {
      id: 'farmer',
      name: 'Farmer',
      icon: Sprout,
      color: '#4ade80',
      hoverColor: '#22c55e',
      route: '/farmer',
      image: FarmerImg
    }
  ];

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setCurrentView('login');
    setErrors({ email: '', password: '' });
  };

  const handleBackToRoles = () => {
    setCurrentView('roleSelection');
    setSelectedRole(null);
    setLoginData({ email: '', password: '' });
    setErrors({ email: '', password: '' });
  };

  const handleBackToLanding = () => {
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!loginData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!loginData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (loginData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log(`Logging in as ${selectedRole.name}:`, loginData);
      console.log(`Navigating to ${selectedRole.route}`);
      navigate(selectedRole.route);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f5f5ff 0%, #faf9faff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    content: {
      width: '100%',
      maxWidth: '1200px'
    },
    backButton: {
      marginBottom: '32px',
      display: 'flex',
      alignItems: 'center',
      color: 'rgba(11, 11, 11, 0.8)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'color 0.2s',
      padding: '8px 0'
    },
    title: {
      textAlign: 'center',
      marginBottom: '64px',
      color: 'white'
    },
    mainTitle: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '16px',
      margin: '0 0 16px 0',
      color:'black'
    },
    subtitle: {
      fontSize: '1.125rem',
      margin: 0,
      opacity: 0.9,
      color:'grey'
    },
    rolesContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '64px',
      flexWrap: 'wrap'
    },
    roleButton: {
      position: 'relative',
      cursor: 'pointer',
      transform: 'translateY(0px) scale(1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      filter: 'drop-shadow(0 20px 25px rgba(0, 0, 0, 0.15))'
    },
    roleCircle: {
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '4px solid white',
      transition: 'all 0.3s ease',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    roleContent: {
      textAlign: 'center',
      color: 'white'
    },
    roleName: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginTop: '8px',
      display: 'block'
    },
    glowEffect: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '50%',
      opacity: 0,
      transition: 'opacity 0.3s',
      filter: 'blur(40px)',
      zIndex: -1
    },
    footer: {
      textAlign: 'center',
      marginTop: '64px',
      color: 'rgba(148, 145, 145, 0.8)',
      fontSize: '0.875rem'
    },
    // New card-based login styles
    loginContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 200px)'
    },
    loginCardWrapper: {
      backgroundColor: 'white',
      borderRadius: '24px',
      padding: '0',
      boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      display: 'flex',
      maxWidth: '900px',
      width: '100%',
      minHeight: '600px'
    },
    loginFormSection: {
      flex: '1',
      padding: '48px 40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    imageSection: {
      flex: '1',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      position: 'relative',
      overflow: 'hidden'
    },
    loginImage: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      borderRadius: '16px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
    },
    roleIndicator: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    roleIcon: {
      width: '80px',
      height: '80px',
      margin: '0 auto 20px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)'
    },
    loginTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#1f2937',
      margin: '0 0 8px 0'
    },
    loginSubtitle: {
      color: '#6b7280',
      fontSize: '1rem',
      margin: 0
    },
    inputGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '16px 20px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '16px',
      color: '#1f2937',
      transition: 'all 0.2s',
      outline: 'none',
      boxSizing: 'border-box',
      backgroundColor: '#f9fafb'
    },
    inputError: {
      borderColor: '#ef4444',
      backgroundColor: '#fef2f2'
    },
    inputFocus: {
      borderColor: '#3b82f6',
      backgroundColor: 'white',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    },
    errorMessage: {
      color: '#ef4444',
      fontSize: '0.875rem',
      marginTop: '6px',
      marginLeft: '4px'
    },
    loginButton: {
      width: '100%',
      padding: '16px 20px',
      borderRadius: '12px',
      fontWeight: '600',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'all 0.2s',
      transform: 'scale(1)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      marginTop: '8px'
    },
    forgotPassword: {
      textAlign: 'center',
      marginTop: '24px'
    },
    forgotLink: {
      fontSize: '0.875rem',
      color: '#6b7280',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.2s',
      fontWeight: '500'
    },
    // Decorative elements for image section
    imageDecoration: {
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%'
    },
    decoration1: {
      width: '100px',
      height: '100px',
      top: '20px',
      right: '20px'
    },
    decoration2: {
      width: '60px',
      height: '60px',
      bottom: '30px',
      left: '30px'
    },
    decoration3: {
      width: '40px',
      height: '40px',
      top: '50%',
      left: '20px'
    }
  };

  // Media queries for mobile responsiveness
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    styles.mainTitle.fontSize = '2.5rem';
    styles.roleCircle.width = '140px';
    styles.roleCircle.height = '140px';
    styles.rolesContainer.flexDirection = 'column';
    styles.rolesContainer.gap = '32px';
    styles.loginCardWrapper.flexDirection = 'column';
    styles.loginCardWrapper.maxWidth = '400px';
    styles.loginFormSection.padding = '32px 24px';
    styles.imageSection.padding = '24px';
    styles.imageSection.minHeight = '200px';
  }

  const RoleSelectionPage = () => (
    <div style={styles.container}>
      <div style={styles.content}>
        <button
          style={styles.backButton}
          onClick={handleBackToLanding}
          onMouseEnter={(e) => e.target.style.color = 'white'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
        >
          <ArrowLeft size={20} style={{ marginRight: '8px' }} />
          Back to Home
        </button>

        <div style={styles.title}>
          <h1 style={styles.mainTitle}>Select a role to log in</h1>
          <p style={styles.subtitle}>Choose your role to access FarmTrace</p>
        </div>

        <div style={styles.rolesContainer}>
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <div
                key={role.id}
                style={styles.roleButton}
                onClick={() => handleRoleSelect(role)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.1)';
                  const glow = e.currentTarget.querySelector('.glow-effect');
                  if (glow) glow.style.opacity = '0.3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                  const glow = e.currentTarget.querySelector('.glow-effect');
                  if (glow) glow.style.opacity = '0';
                }}
              >
                <div
                  style={{
                    ...styles.roleCircle,
                    backgroundColor: role.color
                  }}
                >
                  <div style={styles.roleContent}>
                    <IconComponent size={48} />
                    <span style={styles.roleName}>{role.name}</span>
                  </div>
                </div>
                <div
                  className="glow-effect"
                  style={{
                    ...styles.glowEffect,
                    backgroundColor: role.color
                  }}
                />
              </div>
            );
          })}
        </div>

        <div style={styles.footer}>
          <p>FarmTrace • Secure Role-Based Access</p>
        </div>
      </div>
    </div>
  );

  const LoginPage = () => (
    <div style={styles.container}>
      <div style={styles.content}>
        <button
          style={styles.backButton}
          onClick={handleBackToRoles}
          onMouseEnter={(e) => e.target.style.color = 'white'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
        >
          <ArrowLeft size={20} style={{ marginRight: '8px' }} />
          Back to role selection
        </button>

        <div style={styles.loginContainer}>
          <div style={styles.loginCardWrapper}>
            {/* Left side: Login Form */}
            <div style={styles.loginFormSection}>
              <div style={styles.roleIndicator}>
                <div
                  style={{
                    ...styles.roleIcon,
                    backgroundColor: selectedRole.color
                  }}
                >
                  <selectedRole.icon size={32} color="white" />
                </div>
                <h2 style={styles.loginTitle}>Welcome back</h2>
                <p style={styles.loginSubtitle}>Sign in to your {selectedRole.name} account</p>
              </div>

              <div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    style={{
                      ...styles.input,
                      ...(errors.email ? styles.inputError : {})
                    }}
                    placeholder="Enter your email"
                    onFocus={(e) => {
                      if (!errors.email) {
                        e.target.style.borderColor = selectedRole.color;
                        e.target.style.backgroundColor = 'white';
                        e.target.style.boxShadow = `0 0 0 3px ${selectedRole.color}20`;
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.email ? '#ef4444' : '#e5e7eb';
                      e.target.style.backgroundColor = '#f9fafb';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  {errors.email && <div style={styles.errorMessage}>{errors.email}</div>}
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    style={{
                      ...styles.input,
                      ...(errors.password ? styles.inputError : {})
                    }}
                    placeholder="Enter your password"
                    onFocus={(e) => {
                      if (!errors.password) {
                        e.target.style.borderColor = selectedRole.color;
                        e.target.style.backgroundColor = 'white';
                        e.target.style.boxShadow = `0 0 0 3px ${selectedRole.color}20`;
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.password ? '#ef4444' : '#e5e7eb';
                      e.target.style.backgroundColor = '#f9fafb';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  {errors.password && <div style={styles.errorMessage}>{errors.password}</div>}
                </div>

                <button
                  onClick={handleLogin}
                  style={{
                    ...styles.loginButton,
                    backgroundColor: selectedRole.color
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = selectedRole.hoverColor;
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = `0 12px 24px ${selectedRole.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = selectedRole.color;
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                  }}
                >
                  Sign In
                </button>

                <div style={styles.forgotPassword}>
                  <a
                    style={styles.forgotLink}
                    onMouseEnter={(e) => e.target.style.color = selectedRole.color}
                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            {/* Right side: Image Section */}
            <div style={{
              ...styles.imageSection,
              background: `linear-gradient(135deg, ${selectedRole.color}20, ${selectedRole.hoverColor}40)`
            }}>
              {/* Decorative elements */}
              <div style={{...styles.imageDecoration, ...styles.decoration1}} />
              <div style={{...styles.imageDecoration, ...styles.decoration2}} />
              <div style={{...styles.imageDecoration, ...styles.decoration3}} />
              
              <img
                src={selectedRole.image}
                alt={`${selectedRole.name} Login Illustration`}
                style={styles.loginImage}
              />
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          <p>FarmTrace • Secure Access Portal</p>
        </div>
      </div>
    </div>
  );

  return currentView === 'roleSelection' ? <RoleSelectionPage /> : <LoginPage />;
};

export default Login;