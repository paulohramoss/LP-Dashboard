import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from PIL import Image
except ImportError:
    print("Pillow not found, installing...")
    install("Pillow")
    from PIL import Image

def remove_white_bg(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Change all white (also shades of whites) to transparent
            # Threshold: > 240 for R, G, and B
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Saved transparent image to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    # Process both src and public logos
    remove_white_bg("src/assets/logo.png", "src/assets/logo.png")
    remove_white_bg("public/logo.png", "public/logo.png")
