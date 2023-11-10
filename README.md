[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/DUj7T_Sj)

# Module 2 Assignment - Documentation

## Netlify Sign Up Process & Connect Netlify to GitHub Project

**Step 1:**
Open **[Netlify](https://www.netlify.com/)**
![https://www.netlify.com/](<./img/documentations/Screenshot%20(541).png>)

**Step 2:**
Click **Sign Up**
![Sign Up](<./img/documentations/Screenshot%20(622).png>)

**Step 3:**
**Log in** or **Sign up** with GitHub.
![](<img/documentations/Screenshot%20(624).png>)

**Step 4:**
Make sure you fill the username and password correctly. And then click **Sign In**.
![](<img/documentations/Screenshot%20(625).png>)

## Auto Deployment on GitHub with Netlify

**Step 5:**
Click `Add new site` and then click `Import an existing project`.
![](<img/documentations/Screenshot%20(626).png>)

**Step 6:**
Click `Deploy with GitHub`
![](<img/documentations/Screenshot%20(627).png>)

**Step 7:**
Choose your organization. In this case, choose `revou-fsse-3`.
![](<./img/documentations/Screenshot%20(628).png>)

**Step 8:**
Choose the project or repository You want to deploy. In this case, lets choose `module-2-haikalbintang`.
![](<img/documentations/Screenshot%20(629).png>)

**Step 9:**
Click `Deploy module-2-haikalbintang`.
![](<img/documentations/Screenshot%20(568).png>)

**Step 10:**
And now You are ready to set up a custom domain.
![](<img/documentations/Screenshot%20(661).png>)

## How to Connect Custom Domain and DNS

**Step 11:**
Go to [Niagahoster](https://www.niagahoster.co.id/). Click `Domain` and then `Cari & Cek Domain`.
![](<img/documentations/Screenshot%20(630).png>)

**Step 12:**
Type the custom domain name You want and click `Cek Sekarang`.
![](<img/documentations/Screenshot%20(631).png>)

**Step 13:**
Choose the custom domain name You prefered and select it by click `Pilih`
![](<img/documentations/Screenshot%20(662).png>)

**Step 14:**
Finish the payment. First, choose the package duration.
![](<img/documentations/Screenshot%20(632).png>)

**Step 15:**
Login and Choose the payment method.
![](<img/documentations/Screenshot%20(633).png>)

**Step 16:**
Click `Buat Tagihan Pembayaran`. Finish the Payment.
![](<img/documentations/Screenshot%20(635).png>)

**Step 17:**
Go to [Cloudflare](https://www.cloudflare.com/) and `Log in` or `Sign up`.
![](<img/documentations/Screenshot%20(570).png>)

**Step 18:**
Click `Add a site`.
![](<img/documentations/Screenshot%20(571).png>)

**Step 19:**
Type the domain name that You just already bought and click `Continue`.
![](<img/documentations/Screenshot%20(582).png>)

**Step 20:**
Select `Free` plan and click `Continue`.
![](<img/documentations/Screenshot%20(584).png>)

**Step 21:**
Go back to Netlify and click `Domain management` on the left.
![](<img/documentations/Screenshot%20(663).png>)

**Step 22:**
This is a preference. But I choose to edit the Netlify subdomain. After that, click `Add a domain` or `Add domain alias`
![](<img/documentations/Screenshot%20(644).png>)

**Step 23:**
Type your custom domain and click `Verify`
![](<img/documentations/Screenshot%20(647).png>)

**Step 24:**
Go to Cloudflare, click DNS, click Records. Copy the Cloudflare Nameservers.
![](<img/documentations/Screenshot%20(649).png>)

**Step 25:**
Go to Niagahoster, click Domain, click `Change` and then paste the Cloudflare Namesrvers that You just copied. Then, click `Save`.
![](<img/documentations/Screenshot%20(650).png>)

**Step 26:**
Back to Cloudflare DNS Records and edit the A Type on the top.
![](<img/documentations/Screenshot%20(652).png>)

**Step 27:**
Change Type to CNAME, and Change Target to `haikalbintang.netlify.app`
![](<img/documentations/Screenshot%20(655).png>)

**Step 28:**
Go to `adaapadengancheetah.com` and VOILA!
![](<img/documentations/Screenshot%20(656).png>)

**[AADC: Cheetah. Photo App](https://adaapadengancheetah.site/)**

Tell Us if You have any feedbacks, critics, or questions.

Thank you.
