FROM quay.io/CrazyPrince/crazymd
RUN git clone https://github.com/GEEKMDXINC/CRAZY-MD /root/SLG-MD-V1 
WORKDIR /root/GEEKMDXINC/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
