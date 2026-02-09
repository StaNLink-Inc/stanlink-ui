# StaNLink Design System - Templates TODO

## Authentication Templates
- [ ] **LoginPage** - Email/password login with "Remember me", social auth buttons, forgot password link
- [ ] **SignUpPage** - Registration form with email verification, terms acceptance, social signup
- [ ] **ForgotPasswordPage** - Email input for password reset with success state
- [ ] **ResetPasswordPage** - New password form with strength indicator
- [ ] **VerifyEmailPage** - Email verification success/pending state with resend option
- [ ] **TwoFactorAuthPage** - 2FA code input (6-digit) with backup codes option

## User Profile Templates
- [ ] **ProfilePage** - User info display/edit with avatar upload, bio, settings tabs
- [ ] **AccountSettingsPage** - Email, password, notifications, privacy settings
- [ ] **BillingPage** - Payment methods, invoices, subscription management
- [ ] **NotificationsSettingsPage** - Toggle preferences for email/push/in-app notifications

## Trading Platform Templates
- [ ] **DashboardPage** - Overview with stats cards, recent activity, quick actions
- [ ] **SkillsListPage** - Grid/list view of trading skills with filters, search, sort
- [ ] **SkillDetailPage** - Skill info, performance charts, reviews, buy/deploy button
- [ ] **CreateSkillPage** - Multi-step form to create/upload trading skill (.pyp file)
- [ ] **MarketplacePage** - Browse skills with categories, featured section, trending
- [ ] **MySkillsPage** - User's owned/created skills with edit/delete actions
- [ ] **SkillEditorPage** - Code editor interface for editing .pyp files
- [ ] **BacktestingPage** - Run backtests with date range, parameters, results visualization
- [ ] **LiveTradingPage** - Active trades monitor with real-time updates, stop/start controls
- [ ] **SignalDeliveryPage** - Configure Telegram/WhatsApp/Discord delivery settings

## E-commerce Templates
- [ ] **CheckoutPage** - Cart review, payment form, order summary
- [ ] **OrderConfirmationPage** - Success message with order details, next steps
- [ ] **OrderHistoryPage** - List of past orders with status, download invoices

## Content Templates
- [ ] **LandingPage** - Hero section, features, pricing, testimonials, CTA
- [ ] **PricingPage** - Pricing tiers comparison table with feature breakdown
- [ ] **AboutPage** - Company info, team, mission/vision
- [ ] **ContactPage** - Contact form with map, social links, support info
- [ ] **FAQPage** - Accordion-style questions and answers with search
- [ ] **BlogListPage** - Blog posts grid with pagination, categories, search
- [ ] **BlogPostPage** - Article with hero image, content, author, related posts
- [ ] **DocumentationPage** - Sidebar navigation, content area, table of contents

## Error & Status Templates
- [ ] **404Page** - Not found with search, popular links, back to home
- [ ] **500Page** - Server error with retry button, support contact
- [ ] **MaintenancePage** - Scheduled maintenance with countdown, status updates
- [ ] **ComingSoonPage** - Launch countdown with email signup

## Admin Templates
- [ ] **AdminDashboardPage** - System stats, user metrics, recent activity
- [ ] **UsersManagementPage** - User list with search, filters, actions (ban, delete, edit)
- [ ] **SkillsModerationPage** - Review submitted skills, approve/reject with feedback
- [ ] **AnalyticsPage** - Charts and graphs for platform metrics
- [ ] **SettingsPage** - Platform-wide settings, feature flags, configurations

## Onboarding Templates
- [ ] **WelcomePage** - First-time user welcome with quick tour option
- [ ] **OnboardingWizard** - Multi-step guided setup (profile, preferences, first skill)
- [ ] **TutorialPage** - Interactive tutorial for platform features

## Communication Templates
- [ ] **InboxPage** - Messages list with unread indicator, search, compose
- [ ] **ChatPage** - Real-time chat interface with message history
- [ ] **NotificationsPage** - Notification feed with mark as read, filters

## Total: 47 Templates

## Priority Levels
**P0 (Critical):** LoginPage, SignUpPage, DashboardPage, SkillsListPage, MarketplacePage
**P1 (High):** ProfilePage, SkillDetailPage, CheckoutPage, LandingPage, 404Page
**P2 (Medium):** All other templates

## Design Principles
- Use existing components from the design system
- Mobile-first responsive design
- Consistent spacing (8px grid)
- Google Material Design colors and typography
- Accessibility compliant (WCAG 2.1 AA)
- Loading states for all async operations
- Error states with clear messaging
- Empty states with helpful CTAs
