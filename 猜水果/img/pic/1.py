from PIL import Image
import os

def split_image_into_grid(image_path, output_folder):
    """
    将图片切割成九宫格，并保存到指定文件夹。
    """
    try:
        # 加载图片
        img = Image.open(image_path)
        img_width, img_height = img.size
        
        # 计算每格的尺寸
        grid_width = img_width // 3
        grid_height = img_height // 3
        
        # 创建输出文件夹
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
        
        # 切割并保存每一格
        for i in range(3):
            for j in range(3):
                # 计算每一格的位置
                left = j * grid_width
                top = i * grid_height
                right = left + grid_width
                bottom = top + grid_height
                
                # 切割图片
                grid_img = img.crop((left, top, right, bottom))
                
                # 保存图片
                grid_img.save(os.path.join(output_folder, f'{i*3+j+1}.png'))
                
        print(f"Finished processing {image_path}")
        
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

def process_images_in_folder(folder_path):
    """
    处理文件夹中的所有图片，每张图片都切割成九宫格。
    """
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            image_path = os.path.join(folder_path, filename)
            # 为每张图片创建一个新的输出文件夹
            output_folder = os.path.join(folder_path, filename.split('.')[0] + '_splits')
            split_image_into_grid(image_path, output_folder)

# 指定包含图片的文件夹路径
folder_path = '../图片'
process_images_in_folder(folder_path)
