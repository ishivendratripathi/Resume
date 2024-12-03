import { useState, forwardRef, useRef, useEffect } from "react";
import { ArrowLeft, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import { CollapsibleCard } from "@/components/ui/CollapsibleCard/CollapsibleCard";
import { Input } from "@/components/ui/Input/Input";
import { SlidingViews } from "@/components/ui/SlidingViews/SlidingViews";
import PropTypes from "prop-types";
import styles from "./WorkSection.module.css";
import { Card, CardHeader } from "../../ui/Card/Card";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/TextArea/TextArea";

const WorkSection = forwardRef(
  ({ className, cvData, setCvData, ...props }, ref) => {
    const [activeView, setActiveView] = useState(0);
    const initialFormData = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    };
    const [formData, setFormData] = useState(initialFormData);

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
      const existingWork = cvData.work.find((work) => work.id === formData.id);
      if (existingWork) {
        setCvData((prev) => ({
          ...prev,
          work: prev.work.map((work) =>
            work.id === formData.id ? formData : work
          ),
        }));
        setFormData(initialFormData);
        setActiveView(0);
        return;
      }

      // Add new education
      // Generate an incremented id for the new education
      const newId =
        cvData.work.length > 0
          ? Math.max(...cvData.work.map((work) => work.id)) + 1
          : 1;
      setCvData((prev) => ({
        ...prev,
        work: [...prev.work, { ...formData, id: newId }],
      }));
      setFormData(initialFormData);
      setActiveView(0);
    };

    return (
      <CollapsibleCard
        title="Experience"
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
                  setFormData(initialFormData);
                }}
                className={styles.addButton}
              >
                Add Work Experience
              </Button>
            </div>

            <div className={styles.list} ref={scrollContainerRef}>
              {(cvData.work || []).map((work, index) => (
                <Card key={index} className={styles.card}>
                  <CardHeader className={styles.cardHeader}>
                    <span className={styles.companyName}>{work.company}</span>
                    <div className={styles.actions}>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setActiveView(1);
                          setFormData(work);
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
                            work: prev.work.filter((_, i) => i !== index),
                          }))
                        }
                      >
                        <Trash className={styles.icon} />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
              {(!cvData.work || cvData.work.length === 0) && (
                <p className={styles.emptyMessage}>
                  No work experience added yet
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
                  placeholder="Company"
                  label="Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Position"
                  label="Position"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
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
                <Textarea
                  placeholder="Responsibilities
- Describe your responsibilities at the company
- You can use bullet points to list your responsibilities"
                  label="Responsibilities"
                  value={formData.responsibilities}
                  className={styles.textarea}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      responsibilities: e.target.value,
                    })
                  }
                />
              </div>
            </form>
          </SlidingViews.View>
        </SlidingViews>
      </CollapsibleCard>
    );
  }
);

WorkSection.displayName = "WorkSection";

WorkSection.propTypes = {
  className: PropTypes.string,
  cvData: PropTypes.object,
  setCvData: PropTypes.func,
};

export default WorkSection;
