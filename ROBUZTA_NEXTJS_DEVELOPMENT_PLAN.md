# Robuzta Techlabs Next.js Development Plan

## Project Goal

Build a premium, modern, SEO-ready Robuzta Techlabs website for `robuzta.com`.

The new website should improve the current site by focusing on:

- Better UI/UX
- Mobile-first experience
- Faster lead generation
- Strong trust messaging
- Local SEO
- AI search optimization
- Reusable frontend components
- Dynamic service, location, and blog pages
- A clear premium repair-lab feeling, not a normal local repair-shop feeling

Backend development is not part of this phase.

## Technology Stack

Use Next.js with JavaScript.

Core stack:

- Next.js
- React
- JavaScript
- Tailwind CSS

Recommended libraries:

- Framer Motion for animations
- Lucide React for icons
- Swiper for sliders/carousels
- React Hook Form for forms
- Zod for form validation
- `next/image` for optimized images
- `next/font` for fonts

Fonts:

- Poppins for headings
- Inter for body text and UI

## Brand Direction

Robuzta should feel:

- Premium
- Transparent
- Fast
- Trustworthy
- Technical
- Modern
- Conversion-focused
- Like a professional electronics repair lab

Core trust messages:

- No password or OTP required
- Genuine spare parts
- Serial number verification
- Old parts returned
- Warranty on repairs
- Digital invoice
- Free pickup and delivery
- Same-day or express repair
- Live repair or transparent repair process
- Data security assured

The first impression should make users feel:

> This is not a random local repair shop. This is a premium, professional, trustworthy repair lab.

The website should show the repair business clearly through:

- Real device repair visuals
- Technician/lab/workbench imagery
- Diagnostic and testing process
- Spare-parts verification
- Warranty messaging
- Reviews and proof
- Strong Call and WhatsApp actions
- Clean premium design

Avoid making the site feel like a generic marketing template. Every major section should connect back to Robuzta's actual repair work.

## Color System

Use this design direction:

- Primary navy: for header, footer, headings, brand blocks
- Teal: for links, accents, icons, secondary actions
- Orange: only for conversion CTAs
- WhatsApp green: only for WhatsApp actions
- Neutral gray: for body/support text
- White/light backgrounds: for clean readable sections

Orange should be reserved for important actions such as:

- Get Free Quote
- Book Pickup
- Book Courier Pickup
- Submit form

## Main Pages

Required top-level pages:

- Home
- Laptop Repair
- Mobile Repair
- MacBook Repair
- Microsoft Surface Repair
- Gaming PC Repair
- Desktop Repair
- Data Recovery
- Software Services
- Hardware Upgrades
- Motherboard Repair
- Remote Technical Support
- Franchise
- Locations
- Blog
- FAQ
- About Us
- Contact Us

Pan-India courier repair is not a separate MVP page. It should be highlighted as a premium service feature across the site.

## Dynamic Page Templates

Avoid manually duplicating pages. Use dynamic templates and data files.

Recommended templates:

- `/services/[slug]`
- `/locations/[slug]`
- `/blog/[slug]`

SEO-friendly URLs should map to the data/template system.

Examples:

- `/laptop-repair/`
- `/mobile-repair/`
- `/macbook-repair/`
- `/surface-repair/`
- `/gaming-pc-repair/`
- `/locations/south-bopal/`
- `/locations/tragad/`
- `/blog/laptop-screen-replacement-cost/`

## Priority Pages For First Build

Build these first:

1. Home
2. Services template
3. Laptop Repair
4. Mobile Repair
5. MacBook Repair
6. Location template
7. South Bopal location page
8. Contact
9. FAQ
10. Franchise
11. Blog listing
12. Blog detail template

## Homepage Sections

Homepage should include:

- Header with logo, navigation, call, WhatsApp, and Get Free Quote
- Hero section with clear repair offer
- Trust badge row
- Primary CTA buttons
- Services grid
- Why Choose Robuzta
- Repair process
- Reviews/testimonials
- Locations preview
- Courier repair highlight and Franchise promo strip
- FAQ preview
- Final CTA banner
- Footer

Recommended hero message:

> Broken Tech Slowing You Down? We Fix it Fast. In Plain Sight.

Hero CTA options:

- Book Free Doorstep Pickup
- WhatsApp for Instant Estimate
- Call Direct

## Service Page Template

Every service page should follow this structure:

- Breadcrumb
- H1 with primary keyword
- Direct answer summary
- CTA buttons
- Common problems/symptoms
- Repair process
- Why Choose Robuzta
- Services included
- Trust signals
- Related location links
- Related blog guides
- FAQ block
- Final CTA

Each service page should answer:

- What is this service?
- Who needs it?
- How does it work?
- How long does it take?
- What problems does it solve?
- Is warranty included?
- How can the customer book?

## Location Page Template

Each location page should include:

- Location name
- Address
- Opening hours
- Phone number
- Map/Get Directions button
- Services available at this location
- Nearby areas covered
- Reviews/trust signals
- Call and WhatsApp CTA

Important locations:

- South Bopal
- Tragad
- Satellite
- Vastrapur
- Prahlad Nagar
- SG Highway
- Thaltej
- Navrangpura
- Maninagar
- Chandkheda
- Gota
- Bodakdev
- Science City
- Gandhinagar

Confirm all physical branch details before publishing.

## Courier Repair Highlight

Pan-India courier repair should not be a separate full page in the MVP.

Treat it as a highlighted premium feature:

- Add a homepage section titled something like `Not in Ahmedabad? Send Your Device to Our Repair Lab`
- Add it as a highlighted tile in the services grid
- Mention it on Laptop, MacBook, Surface, and Gaming PC service pages
- Add it in the footer as a feature link or short CTA
- Use WhatsApp as the main action for courier inquiries
- Use `Book Courier Pickup` only where it feels relevant

Suggested process:

1. Digital diagnostics and quote
2. Packing guidance
3. Insured pickup
4. Live unboxing and inspection video
5. Repair approval
6. Bench testing
7. Courier return with warranty

Suggested copy direction:

> Not in Ahmedabad? Ship your laptop, MacBook, Surface, or gaming device to Robuzta's repair lab. Get diagnosis, approval, repair updates, and warranty-backed return delivery.

This can become a dedicated SEO page later if it starts generating enough leads.

## Franchise Page

This is also a growth-priority page.

Sections:

- Hero with franchise inquiry form
- Why partner with Robuzta
- What partner gets
- Training and supply chain benefits
- Brand trust story
- Investment/city inquiry fields
- Repeated bottom inquiry form

Form fields:

- Full name
- Phone/WhatsApp
- City
- Target location
- Investment capacity
- Current background/business experience
- Message

## Navigation

Desktop header:

- Home
- Services mega menu
- Locations
- Franchise
- Blog
- About Us
- Contact

Courier repair can be shown as a small highlighted item inside the Services mega menu or as a homepage feature, but it does not need a top-level navigation item in MVP.

Persistent header actions:

- Call Now
- WhatsApp
- Get Free Quote

Mobile navigation:

- Hamburger menu
- Accordion service groups
- Sticky bottom action bar:
  - Call
  - WhatsApp
  - Get Quote / Book Pickup

## Footer

Footer should include:

- Brand logo
- Short tagline
- Rating/trust badges
- Services links
- Company links
- Locations links
- Courier repair highlight
- Franchise link
- Contact information
- Social links
- Privacy Policy
- Terms
- Sitemap

Use consistent NAP details for local SEO:

- Name
- Address
- Phone

## Developer Split

There are two developers.

### Developer 1: Frontend/UI

Responsible for:

- Next.js setup
- Tailwind setup
- App layout
- Header
- Mega menu
- Mobile menu
- Footer
- Buttons
- Cards
- Forms UI
- Hero sections
- Homepage
- Service page template
- Location page template
- Blog template
- CTA components
- Sticky mobile action bar
- Animations
- Responsive layout

Suggested component list:

- `Navbar`
- `MegaMenu`
- `MobileMenu`
- `Footer`
- `Button`
- `Container`
- `Section`
- `Hero`
- `ServiceCard`
- `TrustCard`
- `ReviewCard`
- `FAQAccordion`
- `ProcessStepper`
- `StatsCard`
- `CTA`
- `BlogCard`
- `LocationCard`
- `Breadcrumb`
- `QuoteForm`
- `FranchiseForm`

### Developer 2: Content/SEO/Data

Responsible for:

- Service data
- Location data
- FAQ data
- Blog data
- Review/testimonial data
- Metadata
- Schema JSON-LD
- Sitemap
- Robots
- Internal linking
- Image optimization
- Content entry
- QA checklist

Suggested data files:

- `src/data/services.js`
- `src/data/locations.js`
- `src/data/faqs.js`
- `src/data/blogs.js`
- `src/data/reviews.js`
- `src/data/navigation.js`
- `src/data/site.js`

## Suggested Folder Structure

```txt
src/
  app/
  components/
    layout/
    ui/
    sections/
    forms/
    cards/
  data/
  lib/
  styles/
public/
  images/
  icons/
```

## SEO Requirements

Every important page should have:

- Unique title
- Unique meta description
- Canonical URL
- One H1
- Proper H2/H3 structure
- Breadcrumbs
- Internal links
- FAQ section where useful
- Schema markup
- Optimized images
- Fast loading

Schema types to consider:

- Organization
- LocalBusiness
- Service
- FAQPage
- BreadcrumbList
- Review
- AggregateRating
- Article
- BlogPosting
- ContactPoint
- WebSite

## AI Search / GEO Requirements

Pages should include direct answer blocks that AI search engines can understand.

Content should use:

- Short paragraphs
- Clear definitions
- FAQ answers
- Comparison tables
- Step-by-step processes
- Specific facts
- Trust statements
- Local details

Avoid vague claims. Prefer specific proof.

## Conversion Requirements

Every page should have a clear next action:

- Call
- WhatsApp
- Get Free Quote
- Book Pickup
- Franchise Inquiry

For courier repair, prefer:

- WhatsApp for Courier Repair
- Ask About Courier Repair
- Book Courier Pickup, only inside courier-specific sections

CTA locations:

- Hero
- Mid-page after trust section
- Before FAQ
- Final CTA banner
- Sticky mobile bottom bar
- Floating desktop Call/WhatsApp buttons

## Forms

Get Free Quote form fields:

- Name
- Phone/WhatsApp
- Device type
- Issue

Franchise form fields:

- Name
- Phone/WhatsApp
- City
- Investment capacity
- Message

Form requirements:

- Visible labels
- Validation
- Error messages
- Success message
- WhatsApp/call fallback

## Performance Checklist

Target:

- Lighthouse score 90+
- Fast page load
- Good mobile performance
- Low layout shift

Checklist:

- Use `next/image`
- Use WebP/AVIF where possible
- Lazy-load non-critical images
- Avoid heavy animations
- Avoid unnecessary carousels
- Keep JavaScript lightweight
- Use semantic HTML
- Use accessible buttons and forms

## Accessibility Checklist

Required:

- Proper heading hierarchy
- Good color contrast
- 44px minimum tap targets
- Visible focus states
- Labels for all form fields
- Alt text for images
- Aria labels for icon-only buttons
- Keyboard-friendly menus

## Git Workflow

Suggested branches:

- `main` for production
- `dev-ui` for Developer 1 UI work
- `dev-content` for Developer 2 content/SEO work

Rules:

- Do not work on the same component at the same time
- Commit after each completed module
- Review before merging
- Reuse components
- Finish MVP first, polish later

## Build Order

Recommended order:

1. Create Next.js JavaScript project
2. Configure Tailwind CSS
3. Add fonts and global styles
4. Create site data files
5. Build layout components
6. Build homepage
7. Build service template
8. Build priority service pages
9. Build location template
10. Build contact and quote form
11. Build FAQ page
12. Build courier repair highlight sections
13. Build franchise page
14. Build blog listing and blog template
15. Add metadata and schema
16. Add sitemap and robots
17. Test responsive views
18. Run Lighthouse and final QA

## Current Site Reference

Current live site:

```txt
https://robuzta.com/
```

Important current business details:

- Email: info@robuzta.com
- Phone: +91 999 245 2459
- Head office: 103, First Floor, Sun South Winds, Safal Parisar Road, South Bopal, Ahmedabad, Gujarat 380057
- Open hours shown on site: 11:00 AM - 7:00 PM

Confirm all business details before final deployment.

## Final QA Checklist

Before launch:

- Responsive on mobile, tablet, desktop
- No console errors
- All links work
- Call links work
- WhatsApp links work
- Forms validate correctly
- Metadata added
- Schema added
- Sitemap added
- Robots added
- Images optimized
- Lighthouse 90+
- Cross-browser testing complete
- No duplicate content
- Correct business contact details
- Correct location details
- Final content reviewed
