# Stage 1: Build 
FROM openjdk:11-jdk-slim as build

# set working directory
WORKDIR /app

# Copy Maven Wrapper and dependency file
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Upload dependency without project rebuild (if code not changed)
RUN ./mvnw dependency:go-offline -B

# Copy source code and build project
COPY src ./src
RUN ./mvnw clean package -DskipTests

# Stage 2: Execute
FROM openjdk:11-jre-slim

WORKDIR /app

COPY --from=build /app/target/j_calculator-0.0.1-SNAPSHOT.jar app.jar
ENV ALLOWED_ORIGINS=http://localhost:5000,http://localhost:8080

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
