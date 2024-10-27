
# Puppeteer Node Scraper for Data Crawling

A robust web scraping solution built with Puppeteer and Node.js that extracts data from [Quotes to Scrape](https://quotes.toscrape.com/). The application is containerized using Docker and deployed on Google Cloud Platform, providing easy access to scraped data through a RESTful API.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Prerequisites](#prerequisites)
5. [Installation and Local Development](#installation)
6. [API Documentation](#api-documentation)
7. [Deployment](#deployment)
8. [License](#license)

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=docker,gcp,git,js,nodejs,vim" alt="Tech Stack Icons"/>
  </a>
</p>

## Introduction

This project showcases the implementation of a production-ready web scraper using Node.js and Puppeteer. The application is containerized and deployed on google cloud platform, with automated deployment through GitHub Actions and container management via Google Cloud Platform. This architecture ensures scalability, maintainability, and easy deployment across different cloud providers.

## Features

- Automated web scraping with Puppeteer
- RESTful API for accessing scraped data
- Docker containerization for consistent environments
- Automated CI/CD pipeline with GitHub Actions
- Cloud-native deployment on GCP
- Scalable architecture


## Tech Stack

- **Express.js**: Fast, unopinionated web framework for Node.js
- **Puppeteer**: Headless Chrome automation library
- **Docker**: Application containerization
- **Google Cloud Platform**: Container registry and cloud infrastructure
- **GitHub Actions**: CI/CD automation
- **Node.js**: JavaScript runtime environment


## Prerequisites

- Node.js (v14 or higher)
- Docker
- Google Cloud SDK
- Git

## Installation and Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/puppeteer-node-scraper.git

# Navigate to project directory
cd puppeteer-node-scraper

# Install dependencies
npm install


# Build Docker image
docker build -t puppeteer-scraper .

# Run docker image 
docker run -p 5000:5000 puppeteer-scraper 

```

### API Endpoints

```
GET /api/quotes          # Fetch all quotes
```

## Deployment

The application is automatically deployed to google cloud platform when changes are pushed to the main branch. The deployment process includes:

1. Building the Docker image
2. Pushing to Google Cloud Container Registry
3. Deploying to Google Cloud Run via GitHub Actions


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.