import os
from PIL import Image

# resize image to a given size and save it to a new file
def resize(img, new_width, new_height):
    """
    Resize an image to a given width and height.
    """
    # get the old size of the image
    old_width, old_height = img.size
    # calculate the ratio of the new size to the old size
    ratio = min(new_width / old_width, new_height / old_height)
    # create a new image with the new size
    new_width, new_height = int(old_width * ratio), int(old_height * ratio)
    new_img = img.resize((new_width, new_height))
    # return the new image
    return new_img

# resize all images in a directory with starting string
def resize_all(dir, start, new_width, new_height):
    """
    Resize all images in a directory with starting string.
    """
    # get all images in the directory
    images = [img for img in os.listdir(dir) if img.startswith(start)]
    # loop through all images
    for img in images:
        # get the path to the image
        path = os.path.join(dir, img)
        # open the image
        with Image.open(path) as image:
            # resize the image
            new_img = resize(image, new_width, new_height)
            # save the image
            new_img.save(path)
    
resize_all('./public/img/', 'snu_', 640, 480)