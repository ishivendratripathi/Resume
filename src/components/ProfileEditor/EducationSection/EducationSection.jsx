import { useState, forwardRef, useRef, useEffect } from "react";
import { ArrowLeft, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import { CollapsibleCard } from "@/components/ui/CollapsibleCard/CollapsibleCard";
import { Input } from "@/components/ui/Input/Input";
import { SlidingViews } from "@/components/ui/SlidingViews/SlidingViews";
import PropTypes from "prop-types";
import styles from "./EducationSection.module.css";
import { Card, CardHeader } from "../../ui/Card/Card";
import { cn } from "@/lib/utils";

const EducationSection = forwardRef(
  ({ className, cvData, setCvData, ...props }, ref) => {
    const [activeView, setActiveView] = useState(0);
    const [formData, setFormData] = useState({
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
    });

    const scrollContainerRef = useRef(null);

    useEffect(() => {
      const hasScrollbar =
        scrollContainerRef.current.scrollHeight >
        scrollContainerRef.current.clientHeight;

      if (hasScrollbar) {
        scrollContainerRef.current.classList.add(styles.scrollable);
      } else {
        scrollContainerRef.current.classList.remove(styles.scrollable);
      }
    }, [activeView]);

    const handleSubmit = (e) => {
      e.preventDefault();

      // Check if the form data is for an existing education using id
      const existingEducation = cvData.education.find(
        (edu) => edu.id === formData.id
      );
      if (existingEducation) {
        setCvData((prev) => ({
          ...prev,
          education: prev.education.map((edu) =>
            edu.id === formData.id ? formData : edu
          ),
        }));
        setFormData({
          institution: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
        });
        setActiveView(0);
        return;
      }
      const newId =
        cvData.education.length > 0
          ? Math.max(...cvData.education.map((edu) => edu.id)) + 1
          : 1;
      setCvData((prev) => ({
        ...prev,
        education: [...prev.education, { ...formData, id: newId }],
      }));
      setFormData({
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      });
      setActiveView(0);
    };

    return (
      <CollapsibleCard
        title="Education"
        ref={ref}
        className={cn(className, styles.collapsibleCard)}
        {...props}
      >
        <SlidingViews activeView={activeView}>
          <SlidingViews.View>
            <div className={styles.header}>
              <Button
                variant="secondary"
                onClick={() => {
                  setActiveView(1);
                  setFormData({
                    institution: "",
                    degree: "",
                    fieldOfStudy: "",
                    startDate: "",
                    endDate: "",
                  });
                }}
                className={styles.addButton}
              >
                Add Education
              </Button>
            </div>

            <div className={styles.list} ref={scrollContainerRef}>
              {(cvData.education || []).map((edu, index) => (
                <Card key={index} className={styles.card}>
                  <CardHeader className={styles.cardHeader}>
                    <span className={styles.institutionName}>
                      {edu.institution}
                    </span>
                    <div className={styles.actions}>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setActiveView(1);
                          setFormData(edu);
                        }}
                      >
                        <Pencil className={styles.icon} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          setCvData((prev) => ({
                            ...prev,
                            education: prev.education.filter(
                              (_, i) => i !== index
                            ),
                          }))
                        }
                      >
                        <Trash className={styles.icon} />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
              {(!cvData.education || cvData.education.length === 0) && (
                <p className={styles.emptyMessage}>
                  No education history added yet
                </p>
              )}
            </div>
          </SlidingViews.View>

          <SlidingViews.View>
            <div className={styles.header}>
              <Button
                variant="icon"
                onClick={() => setActiveView(0)}
                className={styles.backButton}
              >
                <ArrowLeft className={styles.icon} />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <Button type="submit" className={styles.submitButton}>
                Save
              </Button>
              <div className={styles.formFields}>
                <Input
                  placeholder="Institution"
                  label="Institution"
                  value={formData.institution}
                  onChange={(e) =>
                    setFormData({ ...formData, institution: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Degree"
                  label="Degree"
                  value={formData.degree}
                  onChange={(e) =>
                    setFormData({ ...formData, degree: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Field of Study"
                  label="Field of Study"
                  value={formData.fieldOfStudy}
                  onChange={(e) =>
                    setFormData({ ...formData, fieldOfStudy: e.target.value })
                  }
                  required
                />
                <div className={styles.dateFields}>
                  <Input
                    placeholder="Start Date"
                    label="Start Date"
                    type="month"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                    required
                  />
                  <Input
                    placeholder="End Date"
                    label="End Date"
                    type="month"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                  />
                </div>
              </div>
            </form>
          </SlidingViews.View>
        </SlidingViews>
      </CollapsibleCard>
    );
  }
);

EducationSection.displayName = "EducationSection";

EducationSection.propTypes = {
  className: PropTypes.string,
  cvData: PropTypes.object,
  setCvData: PropTypes.func,
};

export default EducationSection;
