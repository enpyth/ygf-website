"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";
import { Button, Link } from "@mui/material";

interface ImageTextSectionProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  variant?: "image-left" | "image-right";
  className?: string;
  // 背景颜色控制
  textBackgroundColor?: string;
  // 文字颜色控制
  titleColor?: string;
  descriptionColor?: string;
}

export function ImageTextSection({
  image,
  title,
  description,
  variant = "image-left",
  className,
  textBackgroundColor = "bg-background",
  titleColor = "text-foreground",
  descriptionColor = "text-muted-foreground",
}: ImageTextSectionProps) {
  return (
    <section
      className={cn(
        "m-0 flex w-full flex-col overflow-hidden p-0 md:min-h-[34rem] md:flex-row",

        className,
      )}
    >
      {/* 图片部分 */}
      <div className="relative min-h-[16rem] w-full overflow-hidden sm:min-h-[20rem] md:min-h-full md:w-1/2">
        <Image src={image.src} alt={image.alt} fill className="object-cover" />
      </div>

      {/* 文字部分 */}
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center px-5 py-10 sm:px-8 sm:py-12 md:w-1/2 md:p-8 lg:p-12",
          textBackgroundColor,
        )}
      >
        <div className="max-w-xl text-center md:max-w-md">
          <h2 className={cn("mb-4 text-2xl font-bold sm:text-3xl", titleColor)}>
            {title}
          </h2>
          <p
            className={cn(
              "text-left text-base leading-relaxed whitespace-pre-line sm:text-lg",
              descriptionColor,
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

// 图片在左侧的变体
export function ImageLeftTextRight({
  image,
  title,
  description,
  className,
  textBackgroundColor = "bg-background",
  titleColor = "text-foreground",
  descriptionColor = "text-muted-foreground",
}: Omit<ImageTextSectionProps, "variant">) {
  return (
    <ImageTextSection
      image={image}
      title={title}
      description={description}
      variant="image-left"
      className={className}
      textBackgroundColor={textBackgroundColor}
      titleColor={titleColor}
      descriptionColor={descriptionColor}
    />
  );
}

// 图片在右侧的变体
export function TextLeftImageRight({
  image,
  title,
  description,
  className,
  textBackgroundColor = "bg-background",
  titleColor = "text-foreground",
  descriptionColor = "text-muted-foreground",
}: Omit<ImageTextSectionProps, "variant">) {
  return (
    <section
      className={cn(
        "m-0 flex w-full flex-col-reverse overflow-hidden p-0 md:min-h-[34rem] md:flex-row md:object-contain",
        className,
      )}
    >
      {/* 文字部分 */}
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center px-5 py-10 sm:px-8 sm:py-12 md:w-1/2 md:p-8 lg:p-12",
          textBackgroundColor,
        )}
      >
        <div className="max-w-xl text-center md:max-w-md">
          <h2 className={cn("mb-3 text-2xl font-bold sm:text-3xl", titleColor)}>
            {title}
          </h2>
          <p
            className={cn(
              "mb-6 text-left text-base leading-relaxed text-muted-foreground sm:text-lg",
              descriptionColor,
            )}
          >
            {description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>

      {/* 图片部分 */}
      <div className="relative min-h-[16rem] w-full overflow-hidden object-contain sm:min-h-[20rem] md:min-h-full md:w-1/2">
        <Image src={image.src} alt={image.alt} fill className="object-cover" />
      </div>
    </section>
  );
}

//没有文字的变体
export function ImageWithNoText({
  image,
  title,
  description,
  variant = "image-with-no-text",
  className,
  textBackgroundColor = "bg-background",
  titleColor = "text-foreground",
  descriptionColor = "text-muted-foreground",
}: Omit<ImageTextSectionProps, "variant"> & {
  variant: "image-with-no-text";
}) {
  return (
    <section
      className={cn(
        "m-0 flex min-h-[22rem] w-full overflow-hidden bg-white p-0 md:min-h-[50rem]",
        className,
      )}
    >
      {/* 文字部分 */}
      <div
        className={cn(
          "w-0 flex flex-col justify-center items-center p-0",
          textBackgroundColor,
        )}
      >
        {/* <div className="max-w-md text-center">
          <h2 className={cn("text-3xl font-bold mb-1", titleColor)}>{title}</h2>
          <p className={cn("text-lg text-left text-muted-foreground leading-relaxed mb-6", descriptionColor)}>
            {description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div> */}
      </div>

      {/* 图片部分 */}
      <div className="w-full h-auto relative">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}

// 带按钮的图片在左侧变体
export function ImageLeftTextRightWithButton({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  className,
  redirectTo,
  textBackgroundColor = "bg-background",
  titleColor = "text-foreground",
  descriptionColor = "text-muted-foreground",
}: Omit<ImageTextSectionProps, "variant"> & {
  buttonText: string;
  onButtonClick?: () => void;
  redirectTo: string;
}) {
  return (
    <section
      className={cn(
        "m-0 flex w-full flex-col overflow-hidden p-0 md:min-h-[28rem] md:flex-row",
        className,
      )}
    >
      {/* 图片部分 */}
      <div className="relative min-h-[16rem] w-full overflow-hidden sm:min-h-[20rem] md:min-h-full md:w-1/2">
        <Image src={image.src} alt={image.alt} fill className="object-cover" />
      </div>

      {/* 文字部分 */}
      <div className="flex w-full flex-col items-center justify-center bg-background px-5 py-10 sm:px-8 sm:py-12 md:w-1/2 md:p-8 lg:p-12">
        <div className="max-w-xl text-center md:max-w-md">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mb-6 text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <Link href={redirectTo}>
            <Button
              onClick={onButtonClick}
              variant="contained"
              sx={{
                backgroundColor: "#991b1b",
                color: "white",
                borderRadius: "48px",
                px: { xs: 3, sm: 4 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 600,
                boxShadow:
                  "0 8px 32px rgba(153, 27, 27, 0.4), 0 4px 16px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: "#b91c1c",
                  boxShadow:
                    "0 12px 40px rgba(153, 27, 27, 0.5), 0 6px 20px rgba(0, 0, 0, 0.3)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                textTransform: "none",
              }}
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// 带按钮的文字在左侧变体
export function TextLeftImageRightWithButton({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  className,
  redirectTo,
  textBackgroundColor = "bg-background",
  titleColor = "text-foreground",
  descriptionColor = "text-muted-foreground",
}: Omit<ImageTextSectionProps, "variant"> & {
  buttonText: string;
  onButtonClick?: () => void;
  redirectTo: string;
}) {
  return (
    <section
      className={cn(
        "m-0 flex w-full flex-col-reverse overflow-hidden p-0 md:min-h-[28rem] md:flex-row",
        className,
      )}
    >
      {/* 文字部分 */}
      <div className="flex w-full flex-col items-center justify-center bg-background px-5 py-10 sm:px-8 sm:py-12 md:w-1/2 md:p-8 lg:p-12">
        <div className="max-w-xl text-center md:max-w-md">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mb-6 text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
          <Link href={redirectTo}>
            <Button
              onClick={onButtonClick}
              variant="contained"
              sx={{
                backgroundColor: "#991b1b",
                color: "white",
                borderRadius: "48px",
                px: { xs: 3, sm: 4 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 600,
                boxShadow:
                  "0 8px 32px rgba(153, 27, 27, 0.4), 0 4px 16px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: "#b91c1c",
                  boxShadow:
                    "0 12px 40px rgba(153, 27, 27, 0.5), 0 6px 20px rgba(0, 0, 0, 0.3)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                textTransform: "none",
              }}
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>

      {/* 图片部分 */}
      <div className="relative min-h-[16rem] w-full overflow-hidden sm:min-h-[20rem] md:min-h-full md:w-1/2">
        <Image src={image.src} alt={image.alt} fill className="object-cover" />
      </div>
    </section>
  );
}
